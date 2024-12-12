"use client"

import React, { useState } from "react"
import axios from "axios"

export default function Contact(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [status, setStatus] = useState("")

    //Untuk menangani perubahan input 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const { name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    //Untuk menangani submit form
    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:3001/contacts", formData)

            if( response.status === 201){
                setStatus("Send Data Successful")
                setFormData({name:"", email:"", message:""})
            }
        } catch(error){
            console.error("Error", error)
            setStatus("An error occurred while sending data")
        }
    }

    return(
        <>
        <section id="contact">
            <div className="contact main-contractor">
                <div className="contact-left">
                    <form 
                    className="contact-form"
                    onSubmit={handleSubmit}
                    >
                        <div>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <textarea 
                                name="message" 
                                id="message"
                                cols={30}
                                rows={10}
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button className="btn-submit">Send Message</button>
                        </div>
                    </form>
                    {status && <p>{status}</p>}
                </div>

                <div className="contact-right">
                    <div className="contact-item">
                        <div className="contact-item-icon">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24"
                        >
                            <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/
                        >
                        </svg>
                        </div>

                        <div className="contact-item-detail">
                            <h4>Address</h4>
                            <p>Perumahan Amarapura Blok C3 No 1, South Tangerang</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-item-icon">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24"
                        >
                            <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/
                        >

                        </svg>
                        </div>

                        <div className="contact-item-detail">
                            <h4>Phone</h4>
                            <p>(+62) 81318932818</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-item-icon">
                        <svg 
                        width="24" 
                        height="24" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill-rule="evenodd" 
                        clip-rule="evenodd"
                        >
                            <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/
                        >

                        </svg>
                        </div>
                        <div className="contact-item-detail">
                            <h4>Email</h4>
                            <p>imam.harits24@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}