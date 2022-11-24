import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './card-style.css';
import people from "../../assets/person.png";
import boardgame from "../../assets/poker.png";

export default function CardUI() {
    return (
        <Card className='card'>
            <CardActionArea>
                <CardMedia className='img'
                    component="img"
                    image={boardgame}
                    alt="boardgame"
                />
                <CardContent className='card-text'>
                    <span className='game-info'> 
                        <Typography className='title-text' gutterBottom variant="h6" component="div">
                            포커/카드
                        </Typography>
                        <Typography className='title-text' variant="body2" component="div">
                            2/2 <img src={people} alt='grey-people' />
                        </Typography>
                    </span>
                    
                    <Typography className='place-info' variant="body2" color="text.secondary">
                        전남대 정문 ㅁㅁㅁ
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}