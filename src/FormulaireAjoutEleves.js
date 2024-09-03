import React, { useEffect, useState } from "react";
import {db} from "./firebase/firebase";
import {addDoc ,collection,doc, getDoc, getDocs} from "firebase/firestore";
import'./FormulaireAjoutEleves.css'
import { storage } from "./firebase/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import {v4} from 'uuid';
import {uploadBytes} from "firebase/storage";
import { ImageListItem } from "@mui/material";

  


const FormulaireAjoutEleves = () => {

	const [img, setImage] = useState('');
	const [imgUrl, setImgUrl] = useState([]);



	const handleClick=(e)=>{

	const imageRef = ref(storage,`files/${v4()}`)

	uploadBytes(imageRef,img)


	}

	useEffect(()=>{

		listAll(ref(storage,"files")).then( imgs=>{
			imgs.items.forEach(val => {
				getDownloadURL(val).then(url=>{
					setImgUrl(data=>[...data,url])
				})});
	
		})
	
		},[])

	


    const handleAdds =(e)=>{
        e.preventDefault()
    
        const val = doc(db, "eleves",'posts')
        const collectinval =collection(val,"feedbacks")
        addDoc(collectinval,{ nom:e.target.nom.value,prenom:e.target.prenom.value,email:e.target.email.value,
			numero:e.target.numero.value,adresse:e.target.adresse.value,niveauclasse:e.target.niveauclasse.value,
        })
        
    
    
       }
    
    return (
            
		<div class="container h-100">
		<div class="row h-100">
			<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
				<div class="d-table-cell align-middle">

					<div class="text-center mt-4">
						<h1 class="h2"></h1>
						<p class="lead">


						</p>
					</div>

					<div class="card">
						<div class="card-body">
							<div class="m-sm-4">
								<form onSubmit={(e)=>handleAdds(e)}>
									<div class="form-group">
										<label>Nom</label>
										<input class="form-control form-control-lg" type ="text" name="nom" placeholder="Entrez le nom"/>
									</div>
									<br/>
									<div class="form-group">
										<label>Prenom</label>
										<input class="form-control form-control-lg" type ="text" name="prenom" placeholder="Entrez le prenom" />
									</div>
									<br/>

									<div class="form-group">
										<label>Email</label>
										<input class="form-control form-control-lg" type="email" name="email" placeholder="Entrez le email"/>
									</div>
									<br/>

									<div class="form-group">
										<label>Numero</label>
										<input class="form-control form-control-lg" type="num" name="numero" placeholder="Entrez le numero" />
									</div>
									<br/>

									<div class="form-group">
										<label>Adresse</label>
										<input class="form-control form-control-lg" type="text" name="adresse" placeholder="Entrez l'adresse" />
									</div>
									<br/>


									<div class="form-group">
										<label>Niveau classe</label>
										<input class="form-control form-control-lg" type="text" name="niveauclasse"  placeholder="Entrez la classe"/>
									</div>
									<br/>
									<div class="" onClick={handleClick}>
									< input type="file" onChange={(e) => setImage(e.target.files[0]) } />
										    <button onClick={handleClick}>Upload</button>
											</div>

                                       <br/>
									<div class="text-center mt-3">
										 <button type="submit" class="btn btn-lg btn-primary">Ajouter un Elève</button> 
										 {
          imgUrl.map(dataval=><div>
          <img src={dataval} height="200px" width="200px"/>

		  </div>)


		}

									
									</div>
								</form>



							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

  </div>



      );
}
export default FormulaireAjoutEleves;