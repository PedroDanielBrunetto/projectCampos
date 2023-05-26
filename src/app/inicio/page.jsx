import Navbar from '../../components/Navbar'
import Image from 'next/image'
import './page.css'
import campos from '../../assets/campos.jpg'

export default function inicio() {
    return (
        <main>
            <Navbar/>
            <div className="p-10 w-full flex justify-center">
                <div className="w-3/4 flex items-center shadow-2xl">
                    <Image src={campos} className="imagem" />
                        <div className="flex flex-col">
                            <p className="text-lg text-center font-bold mb-2">Campos do Jordão</p>
                            <p className="text-left px-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                </div>
            </div>
        </main>
    )}