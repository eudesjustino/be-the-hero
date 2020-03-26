import React,{useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom';
import api  from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Register(){

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [whatsapp , setWhatsapp] = useState('');
    const [city , setCity] = useState('');
    const [uf , setUf] = useState('');

    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();
        const data = {name,email,whatsapp,city,uf};
        try {
            const response =  await api.post('/ongs',data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (error) {
         alert('Erro no cadastro, tente novamente.');    
        }
    }

    return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero"/> 
                <h1>cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sia ONG.</p>
                <Link className="back-link" to="/register"><FiArrowLeft size={20} color="#E02041"/>Não tenho cadastro</Link>
            </section>
            <form onSubmit={handleRegister} >
               
                <input  
                   placeholder="Nome da ONG" 
                   value = {name} 
                   onChange={e=>setName(e.target.value)}
                   name=""
                    id=""
                />

                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)} 
                    name="" 
                    id=""
                />

                <input  
                    placeholder="WhatsApp" 
                    value={whatsapp} 
                    onChange={e=>setWhatsapp(e.target.value)}
                    name=""
                    id=""
                />

                <div className="input-group">
                    
                    <input 
                        placeholder="Cidade" 
                        value={city} 
                        onChange={e=>setCity(e.target.value)} 
                        name="" 
                        id=""
                    />
                    
                    <input 
                        placeholder="UF" 
                        value={uf} 
                        onChange={e=>setUf(e.target.value)} 
                        style={{width:80}} 
                        name="" 
                        id=""
                    />

                </div>
                <button className="button" type="submit">cadastrar</button>

            </form>
        </div>
    </div>
    );
}