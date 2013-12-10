<?php
if(isset($_GET['id'])){
$sel_page = $_GET['id'];

if($sel_page == 2){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/what"); 
}
if($sel_page == 3){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/who"); 

}
if($sel_page == 4){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/who"); 

}
if($sel_page == 5){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/why"); 

}
if($sel_page == 6){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/contact"); 

}
if($sel_page == 6){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/"); 

}


}
 
?>

<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/header.php') ?>
			
		<div id="page">
			<div id="inner">
		<!-- intro -->
<div id="home">
<!-- intro -->
<div id="intro">
			<h2>For over 5 years, The Online Studio has been helping its clients deliver <em> banners</em>,<em> facebook apps</em>, <em> emails</em> and <em> web builds</em> - in fact, all manner of digital production. With <em>creative</em>, <em>planning</em> and <em>project management</em> in London, and <em>multi-skilled developers</em> in the UK, Australia, Thailand and India, we have the experience, skills and capacity to execute your digital brief, on time and on budget.</h2>
	<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/fb.php') ?>			</div>
			<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/slideshow.php') ?>	
	<!--  5 cols -->
		<a href="/what/" class="home"><div id="fourCol">
			<div>
				<h3>HTML5 &amp; Flash Advertising</h3>
				<p><img src="/_img/site/ico_onlineAd.png"/>Concepting, designing, building, site liaison and adserver liaison are all part of our online advertising service.<br /></p>
			</div>
			<div>
				<h3>Social &amp; Mobile Apps</h3>
				<p><img src="/_img/site/ico_socialMedia.png"/>We have been producing work for social media sites since the early days of Facebook and now nearly all of our work contains some social element.<br /></p>
				</div>
			<div>
				<h3>Websites, CMS &amp; e-commerce </h3>
				<p><img src="/_img/site/ico_cms.png"/>From an off-the-shelf solution to our bespoke CMS, we can design, build, manage and host your project.  <br /></p>
				</div>
			<div>
				<h3>Email </h3>
				<p><img src="/_img/site/ico_htmlEmail.png" />Our emails are thoroughly tested to look the same on all browsers and devices. <br /></p>
			</div>
		</div></a>
		</div>
		</div>
		</div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/footer.php') ?>	
