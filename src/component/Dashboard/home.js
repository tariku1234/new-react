import { useRef } from "react";
import { auth, db,storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";



const Home = () => {
    const form = useRef();
    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];


        const storageRef = ref(storage, `portfolio/${image.name}`)

        uploadBytes(storageRef,image).then(
            (snapshot) =>{
                getDownloadURL(snapshot.ref).then((downloadUrl) =>{
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl 
                    })

                },() =>{
                    savePortfolio({
                        name,
                        description,
                        url,
                        image:null 
                })
            })
            },() =>{
                savePortfolio({
                    name,
                    description,
                    url,
                    image:null 
            })
        }
        
    )   
    }
        const savePortfolio = async (portfolio) =>{
            console.log(portfolio)
            try{
               await addDoc(collection(db, 'portfolio'), portfolio);
               window.location.reload(false);
            }catch (error){
                alert('failed to add portfolio')

            } 

        }
    return(
        <div className="dashboard">
           <form ref={form} onSubmit={submitPortfolio}>
             <p> <input type="text" placeholder="Name"></input> </p>
             <p>  <textarea  placeholder="description" /> </p>
             <p> <input type="text" placeholder="url"></input> </p>
             <p> <input type="file" placeholder="image"></input> </p>
             <button type="submit"> SUBMIT</button> 
             <button  onClick={()=> auth.signOut()}> sign out</button> 


           </form>

        </div>
    )
}

export default Home