import styles from "../../style";
import { Button } from 'primereact/button';
import axios from 'axios';
import React, { useState } from "react";
import { Footer } from "../../components";

const Detecter = () => {


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [detectedPlate, setDetectedPlate] = useState(null);
    const [error, setError] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setDetectedPlate(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoading(true);

            const response = await axios.post('http://localhost:8000/detect', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setDetectedPlate(response.data);
        } catch (error) {
            setLoading(false);

            setError(error.response ? error.response.data.detail : 'An error occurred');
        }
    };

    return (
        <div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  
                    <h1>Detect License Plate</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white rounded-xl justify-center flex">
                       <div style={{display:"block"}}>
                       <div>
                        <h2 className=" text-3xl">                     Upload Image:
                        </h2>
                        </div>
                        <div className="block">
                        <label>
                          
                            <input type="file" onChange={handleFileChange} accept=".png" required className="w-full mt-3" />
                        </label>
                        </div>
                       </div>
                    
                        </div>
                        <div className="flex justify-center mt-2">
                        <Button type="submit" label="Detect" loading={loading} className={`py-3 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`} />

                        </div>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {detectedPlate && (
                        <div>
                            <h2>Detected Plate</h2>
                            <p>Plate: {detectedPlate.detected_plate}</p>
                            <p>Country: {detectedPlate.country}</p>
                        </div>
                    )}

                </div>
            </div>
            <Footer />

        </div>

    );

}



export default Detecter;
