<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/header.php') ?>
	<div id="page">
		<div id="inner">
	<div id="blog">
	<!-- intro -->
		<div id="intro">
			<h2>Over the past 5 years we have worked on all manner of digital material. From websites and microsites, to facebook apps and mobile apps, as well as banner and html email production.  <div class="fb-like" data-href="http://www.theonlinestudio.co.uk" data-send="false" data-layout="button_count" data-width="320" data-show-faces="false" data-font="segoe ui"></div>
</h2>
		</div>
		<!-- slider -->
		<div id="pullout">
			<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/slideshow.php') ?>	
        </div>

				<div>
					<div id="contactForm">
					<h3>Client login</h3>
					<form id="form_id" name="form_name" action="/formSubmit.php" method="post">
						<p><label for="first">Username: </label><input type="text" name="name" id="first" /></p>
						<p><label for="first">Password: </label><input type="text" name="email" id="first" /></p>
						<p><input type="submit" name="submit" value="submit" id="button" /></p>
					</form>
				</div>
				
		
				</div>
		</div>			
	</div>	
	</div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/footer.php') ?>
