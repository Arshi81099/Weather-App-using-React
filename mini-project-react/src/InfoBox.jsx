import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
    const INIT_URL = 'https://images.unsplash.com/photo-1617141869037-a0db4d26b6af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const COLD_URL = 'https://images.unsplash.com/photo-1643047403589-80805b2390eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const HOT_URL = 'https://images.unsplash.com/photo-1558472964-be7065dcfab9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const RAINY_URL = 'https://images.unsplash.com/photo-1522050414570-0608831f5d3e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAINY_URL : info.temp > 300 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" component='span'  sx={{ color: 'text.secondary'}}>
                <div>Feels Like: {info.feelsLike}&deg;f</div>
                <div>Weather: {info.weather}</div>  
                <div>Temperature: {info.temp}&deg;f</div>
                <div>Humidity: {info.humidity}</div>
                <div>Max Temperature: {info.tempMax}&deg;f</div>
                <div>Min Temperature: {info.tempMin}&deg;f</div>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}