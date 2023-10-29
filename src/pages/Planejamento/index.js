import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Storage from '../../data/storage'
import Default from '../../templates/default'
import SummaryCardapio from '../../components/SummaryCardapio'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

function Planejamento() {
    const history = useHistory();
    const cardapio = Storage.get('cardapio')
    const pdfRef = useRef()

    const downloadPDF = () => {
        const input = pdfRef.current

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('iamge/png')
            const pdf = new jsPDF('p', 'mm', 'a4', true)
            
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()

            const imgWidth = canvas.width
            const imgHeight = canvas.height

            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
            const imgX = (pdfWidth - imgWidth * ratio) / 2
            const imgY = ((pdfHeight - imgHeight * ratio) / 2)

            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
            pdf.save('cardapio.pdf')
        })
    }

    if (!cardapio || !Array.isArray(cardapio)) history.push('/montemarmita')
    
    const quantidadeDasMarmitas = cardapio.map((marmita) => marmita.quantidade);
    const qtdTotalMarmitas = quantidadeDasMarmitas.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <Default withHeader>
            <div className=' sm:max-w-4xl sm:mx-auto'>
                <h1 className='text-dark text-4xl font-semibold text-center mb-8 flex justify-center items-center tracking-tighter'>Planejamento final</h1>
                <div className='mt-4 text-center' ref={pdfRef}>
                    <SummaryCardapio />
                </div>
                <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around'>
                    <div className='mt-4 p-4 text-sm text-gray-600 rounded-xl bg-white/70 border border-solid border-gray-500 max-w-xs'>
                        <p>A média de tempo para preparar uma refeição é de, no mínimo, uma hora. O planejamento que você montou equivale a {qtdTotalMarmitas} horas para aproveitar com o que quiser!</p>
                    </div>
                    <div className="text-center flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between md:mt-4">
                        <Button text="Baixar Cardápio PDF" isSecondary={true} onClick={downloadPDF} />
                        
                        <Link to="/">
                            <Button text="Criar Novo Cardápio" />
                        </Link>
                    </div>
                </div>
                
            </div>
        </Default>
    )
}

export default Planejamento
