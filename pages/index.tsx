import Detail from '../components/detail'
import axios from 'axios'

export async function getStaticProps () {
    
    console.log(process.env)
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${process.env.NEXT_PUBLIC_LAT}&lon=${process.env.NEXT_PUBLIC_LON}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)

    return{
        props: {
            myWeather: data.data
        }
    }
}

export default function Home({myWeather}) {
    console.log(myWeather)

    return (
        <div>
            <h2>Country: {myWeather.sys.country}</h2>
            <h2>{myWeather.name}</h2>
            <h3>Độ ẩm: {myWeather.main.humidity}%</h3>
            <h3>Thời tiết: {myWeather.weather[0].description}</h3>
            <h4>Nhiệt độ: {myWeather.main.temp}</h4>
            <h4>Nhiệt độ cao nhất: {myWeather.main.temp_max}</h4>
            <h4>Nhiệt độ thấp nhất: {myWeather.main.temp_min}</h4>
            <h4>Áp suất: {myWeather.main.pressure}</h4>
            <h4>Mực nước biển: {myWeather.main.sea_level}</h4>
        </div>
    )
}
