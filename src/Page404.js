import React from "react";
import'./Page404.css';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';



const Page404 = () => {

	const navigate = useNavigate();

    return (  

<section class="error-page section">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 offset-lg-3 col-12">
				<div class="error-inner">
					<h1>404<span>Oups ! On dirait que vous vous êtes perdu </span></h1>
					<p>Nous ne trouvons pas la page que vous recherchez.</p>

                    <div   onClick={()=>{navigate('/')}}    class="btn btn-primary mtl"><HomeIcon></HomeIcon>&nbsp;
                        Return home
                    </div> 

				</div>
			</div>
		</div>
	</div>
</section>
    );
}
 
export default Page404;