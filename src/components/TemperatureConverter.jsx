import { Button, TextField } from "@mui/material";

import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [farangeit, setFarangeit] = useState('');
    const [isCelsius, setIsCelsius] = useState(true);

    const calculate = () => {

        if (isCelsius) {
            setFarangeit((Number.parseFloat(celsius) * 1.8 + 32).toFixed(2));
        }
        else {
            setCelsius(((Number.parseFloat(farangeit) - 32) / 1.8).toFixed(2));

        }
    }

    const handleReset = () => {
        setFarangeit('');
        setCelsius('');
    }

    return (
        <div className="TemperatureConverter">
            <TextField
                label="по шкале Цельсия"
                variant="outlined"
                fullWidth
                value={celsius}
                onChange={(e) => {
                    setCelsius(e.target.value)
                    setIsCelsius(true)
                }} 
                type="number"/>
            <Button
                variant="contained"
                onClick={calculate}
                
            >Цельсия</Button>


            <TextField
                label="по шкале Фаренгейта"
                variant="outlined"
                fullWidth
                value={farangeit}
                onChange={(e) => {
                    setFarangeit(e.target.value);
                    setIsCelsius(false)
                }
                } 
                type="number"/>
                
            <Button
                variant="contained"
                onClick={calculate}
                
            >Фарангейд</Button>

            <Button
                variant="outlined"
                onClick={handleReset}
                
            >
                Сбросить
            </Button>


        </div>
    )
}