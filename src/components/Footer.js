import React from 'react'
import '../components/footer.css'

const Footer = () => {
  return (
         
       <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Movie<span>Library</span></h3>

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					<a href="/">Blog</a>
					<a href="/">Pricing</a>
					<a href="/">About</a>
					<a href="/">Faq</a>
					<a href="/">Contact</a>
				</p>

			   <p>© {new Date().getFullYear()} Frank's Movie Room. All rights reserved.</p> 
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>123. fmk Ave</span> Entebbe , Uganda</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>Tell: +49 1523 5867655 | +256 759 555517</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">Email: frankmperwe@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the Library</span>
					"Unlock endless entertainment with our movie library – where every genre finds its perfect picture!"
				</p>

				<div class="footer-icons">

					<a href="/"><i class="fa fa-facebook"></i></a>
					<a href="/"><i class="fa fa-twitter"></i></a>
					<a href="/"><i class="fa fa-linkedin"></i></a>
					<a href="/"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>

      
  )
}

export default Footer;