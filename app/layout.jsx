import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Property Pulse',
    description: 'Property Pulse is a real estate platform that allows you to buy, sell, and rent properties.',
    keywords: 'retal, fid rentlas, find properties, buy properties, sell properties, rent properties, property pulse'
}

const Mainlayout = ({ children }) => {
    return (
      <html lang="en">
        <body>
            <div>
                {children}
            </div>
        </body>
      </html>
    )
      
}

export default Mainlayout
