import {useState, useTransition} from "react";
import Image from "next/image";
import React from "react";
import {useForm} from "react-hook-form";
import {error} from "next/dist/build/output/log";
import axios from "axios"


export default function Form() {
    const [active, setActive] = useState(false)
    const [checkError, setCheckError] = useState('')


    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = async (data) => {
        alert(JSON.stringify(data))
        //     fetch("https://porter-project.herokuapp.com/feedback/", {
        //     method: 'POST', // или 'PUT'
        //     body: data, // данные могут быть 'строкой' или {объектом}!
        // })
        //     .then(() => alert("Ваш запрос успешно отправлено"))
        try {
            await axios.post('https://porter-prod.herokuapp.com/feedback/', {
                name: data.name,
                phone: data.phone,
                poter: data.poter,
                movers: data.movers,
                dispersal: data.dispersal,
                trash: data.trash,
                description: data.description

            })
                .then(() => alert("Ваш запрос успешно отправлено"))
        } catch (e) {
            console.log(e)
        }


    };


    console.log(watch("example"));

    return (
        <section id="form">
            <div className="container">
                <div className="form-general">
                    <div
                        className={active ? 'form-general__div active' : 'form-general__div'}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <div className="form-general__title">
                                    <h1>Есть груз прямо сейчас?</h1>
                                </div>

                                <label className="form-general__input"
                                       onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" name="name" placeholder="Ф.И.О"
                                           style={errors.name && {borderBottom: " 2px solid red"}}
                                           className={"form-general__input__input"}
                                           {...register("name", {
                                               required: true,
                                               maxLength: 20,
                                           })}
                                    />


                                    <input type="tel" name="tel" placeholder="Номер вашего телефона"
                                           style={errors.phone && {borderBottom: " 2px solid red"}}
                                           className="form-general__input__input"
                                           {...register("phone", {required: true})}
                                    />

                                </label>


                                <div className="form-general__item">
                                    <h1>Выберите подходящие услуги</h1>
                                </div>
                                <div className="form-general__radio">
                                    <div>
                                        <label>
                                            <input type="checkbox" name="radio"
                                                {...register('poter')}

                                                   className={errors.poter ? "form-general__radio__input__errors" : "form-general__radio__input"}
                                            />
                                            <p>Портер</p>
                                        </label>
                                        <label>
                                            <input type="checkbox" name="radio"
                                                   {...register('movers')}
                                                   className={errors.name ? "form-general__radio__input__errors" : "form-general__radio__input"}/>
                                            <p>Грузчики</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="checkbox" name="radio"
                                                   {...register('dispersal')}
                                                   className={errors.name ? "form-general__radio__input__errors" : "form-general__radio__input"}/>
                                            <p>Разборка/сборка мебели</p>
                                        </label>
                                        <label>
                                            <input type="checkbox" name="radio"
                                                   {...register('trash')}
                                                   className={errors.name ? "form-general__radio__input__errors" : "form-general__radio__input"}/>
                                            <p>Вывоз мусора</p>
                                        </label>
                                    </div>

                                </div>
                                <div style={{textAlign: "center", padding: "20px 0"}}>
                                    <span>{checkError}</span>
                                </div>
                                <label className="form-general__area">
                                    <input type="text" placeholder="Комментарии к заказу (необязательно)"
                                           name='text' {...register("description")}/>
                                </label>
                                <div className="form-general__submit"
                                >
                                    <input type="submit"
                                           className="form-general__btn"
                                           placeholder="Заказать"

                                    />
                                </div>
                            </label>
                        </form>


                    </div>
                    <div className={active ? "form-general__successful  block" : "form-general__successful"}>
                        <div>
                            <h1>Ваш з<span>аказ пр</span>инят!</h1>
                            <p>Мы вам перезвоним ближайщие секунды с потврерждением. </p>
                            {/*<Image src={check} alt="img"/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}