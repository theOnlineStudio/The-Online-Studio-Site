<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/header.php') ?>
	<div id="page">
		<div id="inner">		
			<div id="contact">
		<!-- intro -->
			<div id="intro">
			<h2>To get in touch, please use the form below or email us at hello@theonlinestudio.co.uk </h2>
	<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/fb.php') ?>		</div>
			<!-- slider -->
			<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/slideshow.php') ?>	
    	<!--  2 cols -->
			<div id="twoCol">
				<div>
					<div id="contactForm">
					<h3>Send us a message</h3>
					<form id="form_id" name="form_name" action="/formSubmit.php" method="post">
						<p><label for="first">Name: </label><input type="text" name="name" id="first" /></p>
						<p><label for="first">Email: </label><input type="text" name="email" id="first" /></p>
						<p><label for="textarea">Message: </label><textarea name="comments" id="textarea" rows="5" cols="30"></textarea></p>
						<p><input type="submit" name="submit" value="submit" id="button" /></p>
					</form>
				</div>
				<div id="map">
	 <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZft_nDQareNZf9krYptSJBLjMbdmTZA8&sensor=true"> </script>
    <script type="text/javascript">
      

    </script>
    <div id="map_canvas">
	   
    </div>
     <div class="mapFoot">83-87 Crawford Street | London | W1H 2HB | 0207 723 4703</div>
				</div>
			</div>
			
	</div>
	</div>
	</div>
	</div>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/footer.php') ?>
