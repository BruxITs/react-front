import styles from "../../style";
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from "react";
import { Footer } from "../../components";
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function Generer() {
    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [loading, setLoading] = useState(false);

    const cities = [
        { name: 'France' },
        { name: 'Allemagne' },
        { name: 'Luxembourg' },
        { name: 'Hollande' },
        { name: 'Royaumes-Unis' }
    ];
    async function onSubmit(data) {
        data.isValid = false;
        try {
            setLoading(true);
           const res=  await axios.post('http://127.0.0.1:8000/generate', data);
            setSuccessMessage(res.data.generated_plate);
            reset();
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement des données :', error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div className={`bg-primary mb-6 ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <h1 className="text-white text-center text-4xl mb-4">Generer une Plaque</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="inscriptions-form">

                        <div className="flex ">
                            <Dropdown value={selectedCity} {...register("country")} required onChange={(e) => setSelectedCity(e.value)} options={cities} optionValue="name" optionLabel="name"
                                placeholder="Selectionner le pays" className="w-full md:w-14rem mb-8 mt-6" />
                            <div className="flex justify-center items-center">
                                <Button label="Generer" loading={loading} className={`py-3 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`} />

                            </div>


                        </div>
                    </form>
                    {successMessage && (

                        <div className="success-message flex justify-center">

                            <img src={`http://127.0.0.1:8000/static/${successMessage}.png`} alt="ok" />
                        </div>
                    )}
                    <Footer />

                </div>
            </div>
        </>
    )
};

