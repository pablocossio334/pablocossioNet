import React, { useState } from 'react'

import { FcFolder } from "react-icons/fc";

const MaterialInet = () => {
   const [codigo,setCodigo]=useState("0B9o2pLFjY8SlN0lrSWkxYUdnRlE")
   const [materia,setMateria]=useState("Didactica")
  return (
    <div className="main">
      <h1 className="mainInet">
Material Inet Especificas(Plan Anterior)
      </h1>
        <div className="materias">
            <h1>LISTA MATERIAS</h1>
        <ul className='listaMaterias'>

     <li  onClick={() => { setCodigo('0B9o2pLFjY8SlN0lrSWkxYUdnRlE'); setMateria('Didactica')}}> <FcFolder />Didactica</li>
     <li onClick={() => { setCodigo('0B9o2pLFjY8SlT1g4N1REWWNwYjg');setMateria('Logica') }}><FcFolder />Logica</li>
     <li onClick={() => { setCodigo('0B9o2pLFjY8SlN2dFSEpaZjV1R2s');setMateria('Matematicas') }}><FcFolder />Matematicas</li>
     <li onClick={() => { setCodigo('0B9o2pLFjY8SlazZpaG9PSlV1blU');setMateria('Org. del Computador') }}><FcFolder />Organizacion del Computacion</li>
     <li onClick={() => { setCodigo('0B9o2pLFjY8SlQkpadWlCdUxJNm8');setMateria('Base de Datos') }}><FcFolder />Base de Datos</li>
     <li onClick={() => { setCodigo('0B9o2pLFjY8SlZW5aNm9pODhReEU');setMateria('Matematica 2') }}><FcFolder />Matematicas 2</li>
     <li onClick={() => { setCodigo('0B9o2pLFjY8SlcHdNWWJ4aDVfNXM');setMateria('OCSO') }}><FcFolder />OCSO</li>
     <li onClick={() => { setCodigo('0B9o2pLFjY8SlS3J5RzR5NXRIOVk');setMateria('Programacion 2') }}><FcFolder />Programacion 2</li>
     <li onClick={() => { setCodigo('1_PdCriEhfj8tRZMQTtmHBYfLr7S8H-jA');setMateria('Didactica 1') }}><FcFolder />Didactica (segundo)</li>
     <li onClick={() => { setCodigo('1GFfElOI0XQ5DS5-awp9dszqQTyff70yB');setMateria('Linux') }}><FcFolder />Linux</li>
     <li onClick={() => { setCodigo('1fjELsDVEQf7vmmWaFLkAhyOqouMCndJ0'); setMateria('Matematicas')}}><FcFolder />Matematicas</li>
     <li onClick={() => { setCodigo('1rzTASb_SF4Zv2wjubGudLbdf9KtF4ZFJ');setMateria('Programacion') }}><FcFolder />Programacion</li>
     <li onClick={() => { setCodigo('1c9seI6KD7RtGt-v3PhiRU7lwwxSa_SVP');setMateria('Programacion III') }}><FcFolder />Programacion III</li>
</ul>
        </div>
    
        <div className="frameG">
            <h2>{materia}</h2>
            <iframe className='google' src={`https://drive.google.com/embeddedfolderview?id=${codigo}&hl=es`} ></iframe>
           
        

{console.log(codigo)}

        </div>




    </div>
  )
}

export default MaterialInet