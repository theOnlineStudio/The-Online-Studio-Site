<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
	<title>The Online Studio - CREDS </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-touch-fullscreen" content="yes" />

    <link rel="apple-touch-icon" href="apple-touch-icon-114.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72.png" />   
    <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114.png" /> <!-- note use a different image here -->


	<link rel="stylesheet" type="text/css" href="style/reset.css">
	<link rel="stylesheet" type="text/css" href="style/main.css">
	<link href="//vjs.zencdn.net/c/video-js.css" rel="stylesheet">	
	<script src="//vjs.zencdn.net/c/video.js"></script>

	<script src="scripts/jquery-1.8.2.min.js"></script> 
  	<script src="scripts/animate.js"></script> 
	<script src="scripts/jquery.touchSwipe.js"></script>

	
  

	</head>
<body>
<div id="page">
	<div id="pageNumber">1</div>
	<div id="allPages">
		<?php
		
		if ($handle = opendir('pages')) {
		    while (false !== ($entry = readdir($handle))) {
			    $id = basename($entry, ".php");
		        if ($entry != "." && $entry != ".." && $entry != ".DS_Store") {
		        echo "<div class=\"body\" id=\"{$id}\">";
		            include 'pages/'.$entry;
		    echo('</div>
		    	');
		        }
		    }
		    closedir($handle);
		}
		
		?>
	</div>
	
		<div id="navigation">
			<div id="previous">&lt; PREVIOUS</div>
			<div id="next">NEXT &gt;</div>
		</div>



	</div>
   


	</body>
</html>