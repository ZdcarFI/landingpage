
export default function Home() {
    return (
        // Usamos min-h-screen, items-center y justify-center para centrar el celular en toda la pantalla
        <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <a href="https://appetize.io/app/b_hvouiditox7diibotlfot2fnrm">
                <div>
                    <p>hola</p>
                </div>
            </a>
            {/* Contenedor del celular */}
            <div className="relative z-10 w-full max-w-[320px] mx-auto aspect-[9/19] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">

                {/* Notch del celular */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 flex justify-center items-center z-20">
                    <div className="w-20 h-4 bg-black rounded-full" />
                </div>

                {/* Iframe de Appetize.io */}
                <div className="w-full h-full bg-white pt-6">
                    <iframe
                        src="https://lqtgncll-3000.brs.devtunnels.ms/"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title="Emulador de MultiPe"
                    />
                </div>


            </div>

        </main>
    );
}