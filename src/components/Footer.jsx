import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="Footer">
<footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h6>Adresse</h6>
          <ul class="list-unstyled">
            <li><a href="https://www.google.com/maps/@45.7701787,4.8429014,1877m/data=!3m1!1e3" target="_blank" rel="noreferrer"><em>Lyon, Villeurbanne</em> - France</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h6>Téléphone</h6>
          <ul class="list-unstyled">
            <li><a href="tel:+33681775618"><em>06.81.77.56.18</em></a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h6>Heading 3</h6>
          <ul class="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
          </ul>
        </div>
      </div>
    	<div class="col-md-3">
    		<h6 class="follow"><em>Restez en Contact</em></h6>
            <ul class="social-network social-circle">
             <li><a href="mailto:francisque.morel.pro@gmail.com" class="icoFacebook" title="email"><FontAwesomeIcon icon={faAt} /></a></li>
             <li><a href="https://www.linkedin.com/in/francisque-morel" target="_blank" class="icoLinkedin" title="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2020 - Françisque Morel.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
        </div>
    );
}