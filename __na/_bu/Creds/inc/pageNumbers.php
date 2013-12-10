<?php
		
		if ($handle = opendir('pages')) {
    while (false !== ($entry = readdir($handle))) {
	    $id = basename($entry, ".php");
        if ($entry != "." && $entry != ".." && $entry != ".DS_Store") {
        echo "<a href=\"#{$id}\" class=\"pageLinks\">{$id}</a> ";
            }
    }
    closedir($handle);
}
		
		?>