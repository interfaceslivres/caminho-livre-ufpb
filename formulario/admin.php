<?php
require_once( dirname(__FILE__).'/form.lib.php' );

define( 'PHPFMG_USER', "paulohsms@gmail.com" ); // must be a email address. for sending password to you.
define( 'PHPFMG_PW', "31d791" );

?>
<?php
/**
 * GNU Library or Lesser General Public License version 2.0 (LGPLv2)
*/

# main
# ------------------------------------------------------
error_reporting( E_ERROR ) ;
phpfmg_admin_main();
# ------------------------------------------------------




function phpfmg_admin_main(){
    $mod  = isset($_REQUEST['mod'])  ? $_REQUEST['mod']  : '';
    $func = isset($_REQUEST['func']) ? $_REQUEST['func'] : '';
    $function = "phpfmg_{$mod}_{$func}";
    if( !function_exists($function) ){
        phpfmg_admin_default();
        exit;
    };

    // no login required modules
    $public_modules   = false !== strpos('|captcha|', "|{$mod}|", "|ajax|");
    $public_functions = false !== strpos('|phpfmg_ajax_submit||phpfmg_mail_request_password||phpfmg_filman_download||phpfmg_image_processing||phpfmg_dd_lookup|', "|{$function}|") ;   
    if( $public_modules || $public_functions ) { 
        $function();
        exit;
    };
    
    return phpfmg_user_isLogin() ? $function() : phpfmg_admin_default();
}

function phpfmg_ajax_submit(){
    $phpfmg_send = phpfmg_sendmail( $GLOBALS['form_mail'] );
    $isHideForm  = isset($phpfmg_send['isHideForm']) ? $phpfmg_send['isHideForm'] : false;

    $response = array(
        'ok' => $isHideForm,
        'error_fields' => isset($phpfmg_send['error']) ? $phpfmg_send['error']['fields'] : '',
        'OneEntry' => isset($GLOBALS['OneEntry']) ? $GLOBALS['OneEntry'] : '',
    );
    
    @header("Content-Type:text/html; charset=$charset");
    echo "<html><body><script>
    var response = " . json_encode( $response ) . ";
    try{
        parent.fmgHandler.onResponse( response );
    }catch(E){};
    \n\n";
    echo "\n\n</script></body></html>";

}


function phpfmg_admin_default(){
    if( phpfmg_user_login() ){
        phpfmg_admin_panel();
    };
}



function phpfmg_admin_panel()
{    
    phpfmg_admin_header();
    phpfmg_writable_check();
?>    
<table cellpadding="0" cellspacing="0" border="0">
	<tr>
		<td valign=top style="padding-left:280px;">

<style type="text/css">
    .fmg_title{
        font-size: 16px;
        font-weight: bold;
        padding: 10px;
    }
    
    .fmg_sep{
        width:32px;
    }
    
    .fmg_text{
        line-height: 150%;
        vertical-align: top;
        padding-left:28px;
    }

</style>

<script type="text/javascript">
    function deleteAll(n){
        if( confirm("Are you sure you want to delete?" ) ){
            location.href = "admin.php?mod=log&func=delete&file=" + n ;
        };
        return false ;
    }
</script>


<div class="fmg_title">
    1. Email Traffics
</div>
<div class="fmg_text">
    <a href="admin.php?mod=log&func=view&file=1">view</a> &nbsp;&nbsp;
    <a href="admin.php?mod=log&func=download&file=1">download</a> &nbsp;&nbsp;
    <?php 
        if( file_exists(PHPFMG_EMAILS_LOGFILE) ){
            echo '<a href="#" onclick="return deleteAll(1);">delete all</a>';
        };
    ?>
</div>


<div class="fmg_title">
    2. Form Data
</div>
<div class="fmg_text">
    <a href="admin.php?mod=log&func=view&file=2">view</a> &nbsp;&nbsp;
    <a href="admin.php?mod=log&func=download&file=2">download</a> &nbsp;&nbsp;
    <?php 
        if( file_exists(PHPFMG_SAVE_FILE) ){
            echo '<a href="#" onclick="return deleteAll(2);">delete all</a>';
        };
    ?>
</div>

<div class="fmg_title">
    3. Form Generator
</div>
<div class="fmg_text">
    <a href="http://www.formmail-maker.com/generator.php" onclick="document.frmFormMail.submit(); return false;" title="<?php echo htmlspecialchars(PHPFMG_SUBJECT);?>">Edit Form</a> &nbsp;&nbsp;
    <a href="http://www.formmail-maker.com/generator.php" >New Form</a>
</div>
    <form name="frmFormMail" action='http://www.formmail-maker.com/generator.php' method='post' enctype='multipart/form-data'>
    <input type="hidden" name="uuid" value="<?php echo PHPFMG_ID; ?>">
    <input type="hidden" name="external_ini" value="<?php echo function_exists('phpfmg_formini') ?  phpfmg_formini() : ""; ?>">
    </form>

		</td>
	</tr>
</table>

<?php
    phpfmg_admin_footer();
}



function phpfmg_admin_header( $title = '' ){
    header( "Content-Type: text/html; charset=" . PHPFMG_CHARSET );
?>
<html>
<head>
    <title><?php echo '' == $title ? '' : $title . ' | ' ; ?>PHP FormMail Admin Panel </title>
    <meta name="keywords" content="PHP FormMail Generator, PHP HTML form, send html email with attachment, PHP web form,  Free Form, Form Builder, Form Creator, phpFormMailGen, Customized Web Forms, phpFormMailGenerator,formmail.php, formmail.pl, formMail Generator, ASP Formmail, ASP form, PHP Form, Generator, phpFormGen, phpFormGenerator, anti-spam, web hosting">
    <meta name="description" content="PHP formMail Generator - A tool to ceate ready-to-use web forms in a flash. Validating form with CAPTCHA security image, send html email with attachments, send auto response email copy, log email traffics, save and download form data in Excel. ">
    <meta name="generator" content="PHP Mail Form Generator, phpfmg.sourceforge.net">

    <style type='text/css'>
    body, td, label, div, span{
        font-family : Verdana, Arial, Helvetica, sans-serif;
        font-size : 12px;
    }
    </style>
</head>
<body  marginheight="0" marginwidth="0" leftmargin="0" topmargin="0">

<table cellspacing=0 cellpadding=0 border=0 width="100%">
    <td nowrap align=center style="background-color:#024e7b;padding:10px;font-size:18px;color:#ffffff;font-weight:bold;width:250px;" >
        Form Admin Panel
    </td>
    <td style="padding-left:30px;background-color:#86BC1B;width:100%;font-weight:bold;" >
        &nbsp;
<?php
    if( phpfmg_user_isLogin() ){
        echo '<a href="admin.php" style="color:#ffffff;">Main Menu</a> &nbsp;&nbsp;' ;
        echo '<a href="admin.php?mod=user&func=logout" style="color:#ffffff;">Logout</a>' ;
    }; 
?>
    </td>
</table>

<div style="padding-top:28px;">

<?php
    
}


function phpfmg_admin_footer(){
?>

</div>

<div style="color:#cccccc;text-decoration:none;padding:18px;font-weight:bold;">
	:: <a href="http://phpfmg.sourceforge.net" target="_blank" title="Free Mailform Maker: Create read-to-use Web Forms in a flash. Including validating form with CAPTCHA security image, send html email with attachments, send auto response email copy, log email traffics, save and download form data in Excel. " style="color:#cccccc;font-weight:bold;text-decoration:none;">PHP FormMail Generator</a> ::
</div>

</body>
</html>
<?php
}


function phpfmg_image_processing(){
    $img = new phpfmgImage();
    $img->out_processing_gif();
}


# phpfmg module : captcha
# ------------------------------------------------------
function phpfmg_captcha_get(){
    $img = new phpfmgImage();
    $img->out();
    //$_SESSION[PHPFMG_ID.'fmgCaptchCode'] = $img->text ;
    $_SESSION[ phpfmg_captcha_name() ] = $img->text ;
}



function phpfmg_captcha_generate_images(){
    for( $i = 0; $i < 50; $i ++ ){
        $file = "$i.png";
        $img = new phpfmgImage();
        $img->out($file);
        $data = base64_encode( file_get_contents($file) );
        echo "'{$img->text}' => '{$data}',\n" ;
        unlink( $file );
    };
}


function phpfmg_dd_lookup(){
    $paraOk = ( isset($_REQUEST['n']) && isset($_REQUEST['lookup']) && isset($_REQUEST['field_name']) );
    if( !$paraOk )
        return;
        
    $base64 = phpfmg_dependent_dropdown_data();
    $data = @unserialize( base64_decode($base64) );
    if( !is_array($data) ){
        return ;
    };
    
    
    foreach( $data as $field ){
        if( $field['name'] == $_REQUEST['field_name'] ){
            $nColumn = intval($_REQUEST['n']);
            $lookup  = $_REQUEST['lookup']; // $lookup is an array
            $dd      = new DependantDropdown(); 
            echo $dd->lookupFieldColumn( $field, $nColumn, $lookup );
            return;
        };
    };
    
    return;
}


function phpfmg_filman_download(){
    if( !isset($_REQUEST['filelink']) )
        return ;
        
    $info =  @unserialize(base64_decode($_REQUEST['filelink']));
    if( !isset($info['recordID']) ){
        return ;
    };
    
    $file = PHPFMG_SAVE_ATTACHMENTS_DIR . $info['recordID'] . '-' . $info['filename'];
    phpfmg_util_download( $file, $info['filename'] );
}


class phpfmgDataManager
{
    var $dataFile = '';
    var $columns = '';
    var $records = '';
    
    function phpfmgDataManager(){
        $this->dataFile = PHPFMG_SAVE_FILE; 
    }
    
    function parseFile(){
        $fp = @fopen($this->dataFile, 'rb');
        if( !$fp ) return false;
        
        $i = 0 ;
        $phpExitLine = 1; // first line is php code
        $colsLine = 2 ; // second line is column headers
        $this->columns = array();
        $this->records = array();
        $sep = chr(0x09);
        while( !feof($fp) ) { 
            $line = fgets($fp);
            $line = trim($line);
            if( empty($line) ) continue;
            $line = $this->line2display($line);
            $i ++ ;
            switch( $i ){
                case $phpExitLine:
                    continue;
                    break;
                case $colsLine :
                    $this->columns = explode($sep,$line);
                    break;
                default:
                    $this->records[] = explode( $sep, phpfmg_data2record( $line, false ) );
            };
        }; 
        fclose ($fp);
    }
    
    function displayRecords(){
        $this->parseFile();
        echo "<table border=1 style='width=95%;border-collapse: collapse;border-color:#cccccc;' >";
        echo "<tr><td>&nbsp;</td><td><b>" . join( "</b></td><td>&nbsp;<b>", $this->columns ) . "</b></td></tr>\n";
        $i = 1;
        foreach( $this->records as $r ){
            echo "<tr><td align=right>{$i}&nbsp;</td><td>" . join( "</td><td>&nbsp;", $r ) . "</td></tr>\n";
            $i++;
        };
        echo "</table>\n";
    }
    
    function line2display( $line ){
        $line = str_replace( array('"' . chr(0x09) . '"', '""'),  array(chr(0x09),'"'),  $line );
        $line = substr( $line, 1, -1 ); // chop first " and last "
        return $line;
    }
    
}
# end of class



# ------------------------------------------------------
class phpfmgImage
{
    var $im = null;
    var $width = 73 ;
    var $height = 33 ;
    var $text = '' ; 
    var $line_distance = 8;
    var $text_len = 4 ;

    function phpfmgImage( $text = '', $len = 4 ){
        $this->text_len = $len ;
        $this->text = '' == $text ? $this->uniqid( $this->text_len ) : $text ;
        $this->text = strtoupper( substr( $this->text, 0, $this->text_len ) );
    }
    
    function create(){
        $this->im = imagecreate( $this->width, $this->height );
        $bgcolor   = imagecolorallocate($this->im, 255, 255, 255);
        $textcolor = imagecolorallocate($this->im, 0, 0, 0);
        $this->drawLines();
        imagestring($this->im, 5, 20, 9, $this->text, $textcolor);
    }
    
    function drawLines(){
        $linecolor = imagecolorallocate($this->im, 210, 210, 210);
    
        //vertical lines
        for($x = 0; $x < $this->width; $x += $this->line_distance) {
          imageline($this->im, $x, 0, $x, $this->height, $linecolor);
        };
    
        //horizontal lines
        for($y = 0; $y < $this->height; $y += $this->line_distance) {
          imageline($this->im, 0, $y, $this->width, $y, $linecolor);
        };
    }
    
    function out( $filename = '' ){
        if( function_exists('imageline') ){
            $this->create();
            if( '' == $filename ) header("Content-type: image/png");
            ( '' == $filename ) ? imagepng( $this->im ) : imagepng( $this->im, $filename );
            imagedestroy( $this->im ); 
        }else{
            $this->out_predefined_image(); 
        };
    }

    function uniqid( $len = 0 ){
        $md5 = md5( uniqid(rand()) );
        return $len > 0 ? substr($md5,0,$len) : $md5 ;
    }
    
    function out_predefined_image(){
        header("Content-type: image/png");
        $data = $this->getImage(); 
        echo base64_decode($data);
    }
    
    // Use predefined captcha random images if web server doens't have GD graphics library installed  
    function getImage(){
        $images = array(
			'18E5' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAY0lEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDHUMDkMRYHVhbWYEyyOpEHUQaXdHEGCHqXB2Q3Lcya2XY0tCVUVFI7oOoY2gQQdELMg+bGJDEsIMhANl9oiEgNztMdRgE4UdFiMV9AK30yAUyZW0OAAAAAElFTkSuQmCC',
			'F5A2' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7QkNFQxmmMEx1QBILaBBpYAhlCAhAE2N0dHQQQRULYYWohrsvNGrq0qWrooAQ4T6gOY2uDQGNqHYAxUIDWhlQzQOpm4IqxtoKtCMAVYwRaG9gaMggCD8qQizuAwD5wc6rVN/GZAAAAABJRU5ErkJggg==',
			'6744' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAb0lEQVR4nGNYhQEaGAYTpIn7WANEQx0aHRoCkMREpjA0OrQ6NCKLBbQAxaY6tKKINTC0MgQ6TAlAcl9k1KppKzOzoqKQ3BcyhSGAtdHRAUVvK6MDa2hgaAiKGGsDA4ZbRDDEWAMwxQYq/KgIsbgPAA4CzzFJiIsnAAAAAElFTkSuQmCC',
			'6011' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYklEQVR4nGNYhQEaGAYTpIn7WAMYAhimMLQii4lMYQxhCGGYiiwW0MLaChQNRRFrEGl0QOgFOykyatrKrGmrliK7L2QKijqI3lZsYqytWN2CJgZyM2OoQ2jAIAg/KkIs7gMAUDHLp5p9wqQAAAAASUVORK5CYII=',
			'E0D3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWElEQVR4nGNYhQEaGAYTpIn7QkMYAlhDGUIdkMQCGhhDWBsdHQJQxFhbWYGkCIqYSKMrkAxAcl9o1LSVqauilmYhuQ9NHYqYCEE7MN2Czc0DFX5UhFjcBwAy2c6h5bRojwAAAABJRU5ErkJggg==',
			'017A' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAb0lEQVR4nGNYhQEaGAYTpIn7GB0YAlhDA1qRxVgDGAMYGgKmOiCJiUxhBYkFBCCJAXUFMDQ6OogguS9q6aqoVUtXZk1Dch9Y3RRGmDqEWABjaAiKHUARB1R1QFsDWBtQxRgdWEPRxQYq/KgIsbgPAET6yKiIlAq1AAAAAElFTkSuQmCC',
			'2142' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdUlEQVR4nM2QwQ2AMAhF6aEbMBDdABO5dAOdohy6QesOdkobvWD0qEn5txd+eAHaYxKMlF/8PAODUiXDsDiGTMyGce6bNRDadu7diRJav63FfVlbtH79hldSe8NRZ8L55pJOl2IZXowtE/ECGmQe4H8f5sXvAAmpymvfJtVCAAAAAElFTkSuQmCC',
			'269B' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbklEQVR4nGNYhQEaGAYTpIn7WAMYQxhCGUMdkMREprC2Mjo6OgQgiQW0ijSyNgQ6iCDrbhVpAIkFILtv2rSwlZmRoVnI7gsQbWUICUQxj9FBpNEBzTzWBpFGRzQxoA0YbgkNxXTzQIUfFSEW9wEAA4DKg/Le1zAAAAAASUVORK5CYII=',
			'2EC9' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAa0lEQVR4nGNYhQEaGAYTpIn7WANEQxlCHaY6IImJTBFpYHQICAhAEgtoFWlgbRB0EEHWDRZjhIlB3DRtatjSVauiwpDdFwBSxzAVWS9IFyvILmS3NIDEBFDsEGnAdEtoKKabByr8qAixuA8AclHK1Kz8OF4AAAAASUVORK5CYII=',
			'9F33' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYElEQVR4nGNYhQEaGAYTpIn7WANEQx1DGUIdkMREpog0sDY6OgQgiQW0ioDIBhF0sUaHhgAk902bOjVs1dRVS7OQ3MfqiqIOArGYJ4BFDJtbWANEGhjR3DxQ4UdFiMV9AOs/zX0rtrJeAAAAAElFTkSuQmCC',
			'E1DF' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAV0lEQVR4nGNYhQEaGAYTpIn7QkMYAlhDGUNDkMQCGhgDWBsdHRhQxFgDWBsC0cQYkMXATgqNWhW1dFVkaBaS+9DUkS6G5pbQENZQoJtRxAYq/KgIsbgPANEAyWJlInlOAAAAAElFTkSuQmCC',
			'8C1C' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZklEQVR4nGNYhQEaGAYTpIn7WAMYQxmmMEwNQBITmcLa6BDCECCCJBbQKtLgGMLowIKiDqhiCqMDsvuWRk1btWrayixk96Gpg5uHTcxhCrodQLdMQXULyM2MoQ4obh6o8KMixOI+ADtYy4L0BlzCAAAAAElFTkSuQmCC',
			'5DC8' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAY0lEQVR4nGNYhQEaGAYTpIn7QkNEQxhCHaY6IIkFNIi0MjoEBASgijW6Ngg6iCCJBQaAxBhg6sBOCps2bWXqqlVTs5Dd14qiDkmMEcW8gFZMO0SmYLqFNQDTzQMVflSEWNwHAMXazU8QsHXWAAAAAElFTkSuQmCC',
			'DB5F' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZElEQVR4nGNYhQEaGAYTpIn7QgNEQ1hDHUNDkMQCpoi0sjYwOiCrC2gVaXTFFGtlnQoXAzspaunUsKWZmaFZSO4DqWNoCMQwzwGLmCu6GNAtjI6OKGIgNzOEorploMKPihCL+wCU6suXlYD1owAAAABJRU5ErkJggg==',
			'FC68' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXklEQVR4nGNYhQEaGAYTpIn7QkMZQxlCGaY6IIkFNLA2Ojo6BASgiIk0uDY4OoigibE2MMDUgZ0UGjVt1dKpq6ZmIbkPrA6LeawNgRjmuWKIYXMLppsHKvyoCLG4DwCiBc401wl6AgAAAABJRU5ErkJggg==',
			'7ED9' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYklEQVR4nGNYhQEaGAYTpIn7QkNFQ1lDGaY6IIu2ijSwNjoEBKCLNQQ6iCCLTUERg7gpamrY0lVRUWFI7mN0AKkLmIqsl7UBLNaALCYCEUOxA6QC3S0BDVjcPEDhR0WIxX0AErvMQ3812OoAAAAASUVORK5CYII=',
			'119F' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAX0lEQVR4nGNYhQEaGAYTpIn7GB0YAhhCGUNDkMRYHRgDGB0dHZDViTqwBrA2BDqg60USAztpZdaqqJWZkaFZSO4D2xGCqZcBi3mM2MTQ3RLCGgp0M4rYQIUfFSEW9wEAXtfERAysHSsAAAAASUVORK5CYII=',
			'FCEC' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAVUlEQVR4nGNYhQEaGAYTpIn7QkMZQ1lDHaYGIIkFNLA2ujYwBIigiIk0uDYwOrCgibECxZDdFxo1bdXS0JVZyO5DU4dXDNMObG7BdPNAhR8VIRb3AQB1N8xtNRAF7wAAAABJRU5ErkJggg==',
			'FB3C' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAV0lEQVR4nGNYhQEaGAYTpIn7QkNFQxhDGaYGIIkFNIi0sjY6BIigijU6NAQ6sKCpY2h0dEB2X2jU1LBVU1dmIbsPTR2KedjE0O3AdAummwcq/KgIsbgPABmGzcnLadVZAAAAAElFTkSuQmCC',
			'3A24' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAc0lEQVR4nGNYhQEaGAYTpIn7RAMYAhhCGRoCkMQCpjCGMDo6NCKLMbSytrI2BLSiiE0RaXQAqg5Act/KqGkrs1ZmRUUhuw+krpXRAdU80VCHKYyhIShiQHUB6G4RaXR0QBUTDRBpdA0NQBEbqPCjIsTiPgD81c3er4HGPwAAAABJRU5ErkJggg==',
			'688B' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWklEQVR4nGNYhQEaGAYTpIn7WAMYQxhCGUMdkMREprC2Mjo6OgQgiQW0iDS6NgQ6iCCLNaCoAzspMmpl2KrQlaFZSO4LwWZeKxbzsIhhcws2Nw9U+FERYnEfAENvy4XAkQ30AAAAAElFTkSuQmCC',
			'62D6' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7WAMYQ1hDGaY6IImJTGFtZW10CAhAEgtoEWl0bQh0EEAWa2AAiyG7LzJq1dKlqyJTs5DcFzKFYQprQyCqea0MAUAxBxEUMUYHdDGgWxrQ3cIaIBrqiubmgQo/KkIs7gMAGNrM7eEoxSkAAAAASUVORK5CYII=',
			'F472' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAb0lEQVR4nM2QMQ6AIAxFPwM3wPt0ca+JXThNHXoDOQILpxQ3EEdN6E86vLTpS1GGUsyUX/xEYF44UcNYkWpn7plANwodcysO0tD4Scy55FJi48caDOc92e4uQgxDf8Mc1ckH8woemZN9gv99mBe/C+5MzV4Or+NQAAAAAElFTkSuQmCC',
			'03D2' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7GB1YQ1hDGaY6IImxBoi0sjY6BAQgiYlMYWh0bQh0EEESC2hlaGVtCGgQQXJf1NJVYUtXRQEhwn1QdY0OqHqB5gFJDDsCpjBgcQummxlDQwZB+FERYnEfAOUOzL6VF4OTAAAAAElFTkSuQmCC',
			'CB2A' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcElEQVR4nGNYhQEaGAYTpIn7WENEQxhCGVqRxURaRVoZHR2mOiCJBTSKNLo2BAQEIIsBVTI0BDqIILkvatXUsFUrM7OmIbkPrK6VEaYOJtboMIUxNATNDocAVHVgtzigioHczBoaiCI2UOFHRYjFfQDn+cu+ob1tcAAAAABJRU5ErkJggg==',
			'3208' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdElEQVR4nGNYhQEaGAYTpIn7RAMYQximMEx1QBILmMLayhDKEBCArLJVpNHR0dFBBFlsCkOja0MATB3YSSujVi1duipqahay+6YwTGFFqIOaxxDA2hCIal4rowMjmh1AtzSgu0U0QDTUAc3NAxV+VIRY3AcAzqXL1WNl5h8AAAAASUVORK5CYII=',
			'45C3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcElEQVR4nGNYhQEaGAYTpI37poiGMoQ6hDogi4WINDA6BDoEIIkxAsVYGwQaRJDEWKeIhLAC6QAk902bNnXp0lWrlmYhuS9gCkOjK0IdGIaGQsSQzWOYIgIUE0ATY21FdwvDFMYQDDcPVPhRD2JxHwCpY8y2NM0oXQAAAABJRU5ErkJggg==',
			'45A9' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAeElEQVR4nM2QMQ6AMAhF6dAb4H3awR0TcehpcPAG1Bu4eEqriQmNjhrlby+f8AKslxH4U97x04ZBIQfLehRgIDLMFeZiDGiYV+y9dCc7lOY5L8ua0mD8SGFshbLdZS6MSbBywb0XauYnL1S5gLpyl2rnr/73XG78NlgyzL1Tcr4iAAAAAElFTkSuQmCC',
			'BE78' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7QgNEQ1lDA6Y6IIkFTBEBkQEByGKtILFABxF0dY0OMHVgJ4VGTQ1btXTV1Cwk94HVTWHANC+AEdU8oBijAyOGHawNqHrBbm5gQHHzQIUfFSEW9wEAG8jNeSK8EiYAAAAASUVORK5CYII=',
			'9A09' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAd0lEQVR4nGNYhQEaGAYTpIn7WAMYAhimMEx1QBITmcIYwhDKEBCAJBbQytrK6OjoIIIiJtLo2hAIEwM7adrUaStTV0VFhSG5j9UVpC5gKrJehlbRUKBYA7KYANA8oBUodohMEWl0QHMLawBQDM3NAxV+VIRY3AcAA1TMUkwxqfwAAAAASUVORK5CYII=',
			'8228' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAeUlEQVR4nGNYhQEaGAYTpIn7WAMYQxhCGaY6IImJTGFtZXR0CAhAEgtoFWl0bQh0EEFRx9Do0BAAUwd20tKoVUtXrcyamoXkPqC6KQytDGjmMQQwTGFEMS+gldGBIYARzQ7WBpAosl7WANFQ19AAFDcPVPhREWJxHwDvzMvgnkIOGgAAAABJRU5ErkJggg==',
			'CD27' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7WENEQxhCGUNDkMREWkVaGR0dGkSQxAIaRRpdGwJQxRpEGh2AZACS+6JWTVuZBYJI7gOra2VoZUDXO4VhCgOaHQ4BDAEM6G5xYHRAdzNraCCK2ECFHxUhFvcBABvKzJ5ViHzJAAAAAElFTkSuQmCC',
			'DED4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWElEQVR4nGNYhQEaGAYTpIn7QgNEQ1lDGRoCkMQCpog0sDY6NKKItQLFgCQWsSkBSO6LWjo1bOmqqKgoJPdB1AU6YOoNDA3BNA+bW1DEsLl5oMKPihCL+wAOwdAbwyxcegAAAABJRU5ErkJggg==',
			'A658' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdklEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDHaY6IImxBrC2sjYwBAQgiYlMEWlkBaoWQRILaBVpYJ0KVwd2UtTSaWFLM7OmZiG5L6BVtBVIopgXGirS6NAQiG5eoyuGGGsro6MDit6AVsYQhlAGFDcPVPhREWJxHwBHVMyc0u89zQAAAABJRU5ErkJggg==',
			'8BC6' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXUlEQVR4nGNYhQEaGAYTpIn7WANEQxhCHaY6IImJTBFpZXQICAhAEgtoFWl0bRB0EEBTx9rA6IDsvqVRU8OWrlqZmoXkPqg6LOYxOohgsUOEgFuwuXmgwo+KEIv7ADh2zEb81b8qAAAAAElFTkSuQmCC',
			'D67D' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7QgMYQ1hDA0MdkMQCprC2MjQEOgQgi7WKNILERFDFGhgaHWFiYCdFLZ0WtmrpyqxpSO4LaBVtZZjCiK630SEAU8zRAU0M6BbWBkYUt4Dd3MCI4uaBCj8qQizuAwAmi8zFyXo/KQAAAABJRU5ErkJggg==',
			'5260' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdklEQVR4nGNYhQEaGAYTpIn7QkMYQxhCGVqRxQIaWFsZHR2mOqCIiTS6NjgEBCCJBQYwAMUYHUSQ3Bc2bdXSpVNXZk1Ddl8rwxRWR0eYOphYAGtDIIpYQCujA2tDAIodIlNYG9DdwhogGuqA5uaBCj8qQizuAwA6RcwT6lt41QAAAABJRU5ErkJggg==',
			'B835' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZ0lEQVR4nGNYhQEaGAYTpIn7QgMYQxhDGUMDkMQCprC2sjY6OiCrC2gVaXRoCEQVA6pjaHR0dUByX2jUyrBVU1dGRSG5D6LOoUEEw7wALGKBDiIYbnEIQHYfxM0MUx0GQfhREWJxHwA/Ac4JRLbt6AAAAABJRU5ErkJggg==',
			'D685' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaklEQVR4nGNYhQEaGAYTpIn7QgMYQxhCGUMDkMQCprC2Mjo6OiCrC2gVaWRtCEQXawCqc3VAcl/U0mlhq0JXRkUhuS+gVRRonkODCJp5rg0BWMQCHUQw3OIQgOw+iJsZpjoMgvCjIsTiPgCeEczJJjgLygAAAABJRU5ErkJggg==',
			'A86E' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7GB0YQxhCGUMDkMRYA1hbGR0dHZDViUwRaXRtQBULaGVtZQWagOy+qKUrw5ZOXRmaheQ+sDo080JDQeYFopmHTQzTLQGtmG4eqPCjIsTiPgCykcqIpWPKpQAAAABJRU5ErkJggg==',
			'012E' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaklEQVR4nGNYhQEaGAYTpIn7GB0YAhhCGUMDkMRYAxgDGB0dHZDViUxhDWBtCEQRC2gF6kWIgZ0UtXRV1KqVmaFZSO4Dq2tlxNQ7hRHNDqBYAKoYK1gEVYzRgTWUNTQQxc0DFX5UhFjcBwAv2caHoVew7QAAAABJRU5ErkJggg==',
			'412A' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpI37pjAEMIQytKKIhTAGMDo6THVAEmMMYQ1gbQgICEASYwXpbQh0EEFy37Rpq6JWrczMmobkvgCQulZGmDowDA0Fik1hDA1Bd0sAqjqQGKMDuhhrKGtoIKrYQIUf9SAW9wEAh1rIVPKiCXwAAAAASUVORK5CYII=',
			'4794' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdElEQVR4nM3Quw2AMAxF0ZciG8A+TkFvpLjJBmxhimxgZQeYEkrzKUFgd1eydGSsl1H8ad/xWS8kUPYtY06JZt/C3gbl6ls01Khs7HytrW2ZSinOxwZGHsnfigSCjpIPlqhhlxws1mlIdGk4m7/633N749sA3zXNiH0oTUwAAAAASUVORK5CYII=',
			'A234' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdUlEQVR4nM2QsRGAIAxFQ5ENcJ+4QbwjDdOEgg1wBBqmFLqglnqa3/37yX8XaJdR+JNe4XPkghNQNh4yZkyUrOeLT6ScrccZeooKG75YW217i9Hw9VyBtJLdFQEG3SRM9xwNkrkDFUfz5C2ynpi/+t+DuuE7AK5mzz++uuZgAAAAAElFTkSuQmCC',
			'9B09' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7WANEQximMEx1QBITmSLSyhDKEBCAJBbQKtLo6OjoIIIq1sraEAgTAztp2tSpYUtXRUWFIbmP1RWkLmAqsl4GoHmuDQENyGICYDscUOzA5hZsbh6o8KMixOI+AOBAy/GKI6K7AAAAAElFTkSuQmCC',
			'1123' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaElEQVR4nGNYhQEaGAYTpIn7GB0YAhhCGUIdkMRYHRgDGB0dHQKQxEQdWANYGwIaRND1AsUCkNy3MmtVFJBYmoXkPrC6VoaGAHS9UxgwzQvAFGN0YER1SwhrKGtoAIqbByr8qAixuA8AyifHD3D6LGsAAAAASUVORK5CYII=',
			'5DE3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXUlEQVR4nGNYhQEaGAYTpIn7QkNEQ1hDHUIdkMQCGkRaWRsYHQJQxRpdgbQIklhgAEQsAMl9YdOmrUwNXbU0C9l9rSjqUMSQzQvAIiYyBdMtrAGYbh6o8KMixOI+AM4tzVv63tfiAAAAAElFTkSuQmCC',
			'6D88' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYElEQVR4nGNYhQEaGAYTpIn7WANEQxhCGaY6IImJTBFpZXR0CAhAEgtoEWl0bQh0EEEWaxBpdESoAzspMmrayqzQVVOzkNwXMgVFHURvKxbzsIhhcws2Nw9U+FERYnEfAJfWzVyXbE0iAAAAAElFTkSuQmCC',
			'EDC7' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWklEQVR4nGNYhQEaGAYTpIn7QkNEQxhCHUNDkMQCGkRaGR2AJKpYo2uDABYxEI1wX2jUtJWpq1atzEJyH1RdKwOm3imYYgIBDBhuCXTA4mYUsYEKPypCLO4DAHp6zcZPnz3tAAAAAElFTkSuQmCC',
			'60D0' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7WAMYAlhDGVqRxUSmMIawNjpMdUASC2hhbWVtCAgIQBZrEGl0bQh0EEFyX2TUtJWpqyKzpiG5L2QKijqI3lZsYph2YHMLNjcPVPhREWJxHwA12s0Ok/TJuAAAAABJRU5ErkJggg==',
			'FC06' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAW0lEQVR4nGNYhQEaGAYTpIn7QkMZQxmmMEx1QBILaGBtdAhlCAhAERNpcHR0dBBAE2NtCHRAdl9o1LRVS1dFpmYhuQ+qDsM8kF4RLHaIEHQLppsHKvyoCLG4DwDUhs2TgCerSwAAAABJRU5ErkJggg==',
			'0B24' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7GB1EQxhCGRoCkMRYA0RaGR0dGpHFRKaINLo2BLQiiwW0irQCySkBSO6LWjo1bNXKrKgoJPeB1bUyOqDpbXSYwhgagmaHQwAWtzigioHczBoagCI2UOFHRYjFfQBt8c0r5hroIQAAAABJRU5ErkJggg==',
			'082D' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7GB0YQxhCGUMdkMRYA1hbGR0dHQKQxESmiDS6NgQ6iCCJBbSytjIgxMBOilq6MmzVysysaUjuA6trZUTTK9LoMAVVDGSHQwCqGNgtDowobgG5mTU0EMXNAxV+VIRY3AcAm47KGLtbdAUAAAAASUVORK5CYII=',
			'7D47' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcklEQVR4nGNYhQEaGAYTpIn7QkNFQxgaHUNDkEVbRVoZWh0aRFDFGh2moolNAYoFOjQEILsvatrKzMyslVlI7mN0EGl0bXRoRbaXtQEoFhowBVlMBCjm0OgQgCwW0AB0S6OjA6oY2M0oYgMVflSEWNwHAPG+zXhYP4/LAAAAAElFTkSuQmCC',
			'374C' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7RANEQx0aHaYGIIkFTGFodGh1CBBBVtkKFJvq6MCCLDYFKBro6IDsvpVRq6atzMzMQnHfFIYA1ka4Oqh5jA6soYFoYqwNDI2odgRMAbqiEdUtogFgMRQ3D1T4URFicR8A543L024xiWkAAAAASUVORK5CYII=',
			'2A0D' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAb0lEQVR4nGNYhQEaGAYTpIn7WAMYAhimMIY6IImJTGEMYQhldAhAEgtoZW1ldHR0EEHW3SrS6NoQCBODuGnatJWpqyKzpiG7LwBFHRgyOoiGoouxNog0OqLZIQIUc0BzS2goUAzNzQMVflSEWNwHAIt4yyvPHHJ7AAAAAElFTkSuQmCC',
			'E63C' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYElEQVR4nGNYhQEaGAYTpIn7QkMYQxhDGaYGIIkFNLC2sjY6BIigiIk0MjQEOrCgijUwNDo6ILsvNGpa2KqpK7OQ3RfQINqKpA5ungPQPGxiqHZgugWbmwcq/KgIsbgPADt9zRitWY24AAAAAElFTkSuQmCC',
			'124B' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcElEQVR4nGNYhQEaGAYTpIn7GB0YQxgaHUMdkMRYHVhbGVodHQKQxEQdRBodpjo6iKDoZWh0CISrAztpZdaqpSszM0OzkNwHVDeFtRHVPKBYAGtoIJp5IBPR7WBtYEDTKxoiGuqA5uaBCj8qQizuAwCLdclHSq2HLAAAAABJRU5ErkJggg==',
			'203C' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaElEQVR4nGNYhQEaGAYTpIn7WAMYAhhDGaYGIImJTGEMYW10CBBBEgtoZW1laAh0YEHW3SrS6NDo6IDivmnTVmZNXZmF4r4AFHVgyOgAFAOah+KWBkw7RBow3RIaiunmgQo/KkIs7gMAzxPLFwAzs1AAAAAASUVORK5CYII=',
			'A8F4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDAxoCkMRYA1hbWRsYGpHFRKaINLo2MLQiiwW0gtVNCUByX9TSlWFLQ1dFRSG5D6KO0QFZb2goyDzG0BAU88B2NGCxA00M6GY0sYEKPypCLO4DAOj3zdpG4jgQAAAAAElFTkSuQmCC',
			'9F61' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZklEQVR4nGNYhQEaGAYTpIn7WANEQx1CGVqRxUSmiDQwOjpMRRYLaBVpYG0AqsQQg+sFO2na1KlhS6euWorsPlZXoDpHBxQ7GMB6A1DEBLCIQd2CIsYaINLAEMoQGjAIwo+KEIv7AKMhy7vZmmZiAAAAAElFTkSuQmCC',
			'4427' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcElEQVR4nM2QMQ6AIAwA24Ef4H9wcK8J/QSvYPEHlR8wwCvFraCjRnvbJU0vhXqZCH/inT6BDRjZa+dhx9lFqxx6YBOpc0ZwgeZI9aWUcy2hBNVHYjc4UbvMEztp18cWagwOHbrRGV5799X/nuOm7wBh6sqVpKcv+AAAAABJRU5ErkJggg==',
			'EDA9' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZklEQVR4nGNYhQEaGAYTpIn7QkNEQximMEx1QBILaBBpZQhlCAhAFWt0dHR0EEETc20IhImBnRQaNW1l6qqoqDAk90HUBUzF0BsKJDHMC0C3o5W1IQDFLSA3A8VQ3DxQ4UdFiMV9ADWozuR6GbF6AAAAAElFTkSuQmCC',
			'7BDF' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAX0lEQVR4nGNYhQEaGAYTpIn7QkNFQ1hDGUNDkEVbRVpZGx0dGFDFGl0bAlHFpgDVIcQgboqaGrZ0VWRoFpL7GB1Q1IEhawOmeSJYxAIaMN0S0AB2M6pbBij8qAixuA8AUH/Ks9mEmnQAAAAASUVORK5CYII=',
			'20A8' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdElEQVR4nGNYhQEaGAYTpIn7WAMYAhimMEx1QBITmcIYwhDKEBCAJBbQytrK6OjoIIKsu1Wk0bUhAKYO4qZp01amroqamoXsvgAUdWDI6AAUCw1EMY+1gbWVtQFVTKSBMYQVTW8o0G1AMRQ3D1T4URFicR8A1S3MIQxbX0wAAAAASUVORK5CYII=',
			'B73B' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaklEQVR4nGNYhQEaGAYTpIn7QgNEQx1DGUMdkMQCpjA0ujY6OgQgi7UyNDo0BDqIoKoDisLVgZ0UGrVq2qqpK0OzkNwHVBfAgGEeowMDunmtrA0YYlNEGljR9IYGiDQworl5oMKPihCL+wBSys3CjDjwfAAAAABJRU5ErkJggg==',
			'B5F7' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaklEQVR4nGNYhQEaGAYTpIn7QgNEQ1lDA0NDkMQCpog0sAJpEWSxVixiU0RCQGIBSO4LjZq6dGnoqpVZSO4LmMLQ6NrA0MqAYh5YbAqqmAhILABFbAprK2sDowOqmxlD0MUGKvyoCLG4DwBNKszTn85L9wAAAABJRU5ErkJggg==',
			'8B4C' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYklEQVR4nGNYhQEaGAYTpIn7WANEQxgaHaYGIImJTBFpZWh1CBBBEgtoFQGqcnRgQVcX6OiA7L6lUVPDVmZmZiG7D6SOtRGuDm6ea2gghphDIxY7GlHdgs3NAxV+VIRY3AcA1bXMwEyWcOMAAAAASUVORK5CYII=',
			'18BD' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAW0lEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDGUMdkMRYHVhbWRsdHQKQxEQdRBpdGwIdRFD0QtSJILlvZdbKsKWhK7OmIbkPTR1UDJt5uO1AcUsIppsHKvyoCLG4DwA508kcEFsqkwAAAABJRU5ErkJggg==',
			'87C6' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7WANEQx1CHaY6IImJTGFodHQICAhAEgtoZWh0bRB0EEBV18rawOiA7L6lUaumLV21MjULyX1AdQFAdWjmMTqA9IqgiLE2sALtEEGxQwSoCtUtrAFAFWhuHqjwoyLE4j4A30bL1duKa2UAAAAASUVORK5CYII=',
			'71E7' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZElEQVR4nGNYhQEaGAYTpIn7QkMZAlhDHUNDkEVbGQNYgbQIihgrptgUBrBYALL7olZFLQ1dtTILyX2MDmB1rcj2AvkgsSnIYiIQsQBksQCwGNAEFDHWUKCbUcQGKvyoCLG4DwDU/MiQAJmdAwAAAABJRU5ErkJggg==',
			'58D7' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7QkMYQ1hDGUNDkMQCGlhbWRsdGkRQxEQaXUEkklhgAFAdUCwAyX1h01aGLV0VtTIL2X2tYHWtKDa3gs2bgiwWABELQBYTmQJyi6MDshhrANjNKGIDFX5UhFjcBwCfD8z/V2wmKAAAAABJRU5ErkJggg==',
			'E36A' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7QkNYQxhCGVqRxQIaRFoZHR2mOqCIMTS6NjgEBKCKtbI2MDqIILkvNGpV2NKpK7OmIbkPrM7REaYOybzA0BBMMTR1ILeg6oW4mRFFbKDCj4oQi/sAwFvMha+nLvkAAAAASUVORK5CYII=',
			'4EEF' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAVUlEQVR4nGNYhQEaGAYTpI37poiGsoY6hoYgi4WINLA2MDogq2PEIsY6BUUM7KRp06aGLQ1dGZqF5L6AKZh6Q0MxxRiwqMMuBnYzqthAhR/1IBb3AQBbxshNAngbxgAAAABJRU5ErkJggg==',
			'53B1' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7QkNYQ1hDGVqRxQIaRFpZGx2moooxNLo2BIQiiwUGMIDUwfSCnRQ2bVXY0tBVS1Hc14qiDiYGMg/VXixiIlNEMPSyBoDdHBowCMKPihCL+wBhNc0ZoUPkowAAAABJRU5ErkJggg==',
			'DB99' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZklEQVR4nGNYhQEaGAYTpIn7QgNEQxhCGaY6IIkFTBFpZXR0CAhAFmsVaXRtCHQQQRVrZUWIgZ0UtXRq2MrMqKgwJPeB1DGEBExF09vo0BDQgC7m2BCAagcWt2Bz80CFHxUhFvcBAGHuzgP706XzAAAAAElFTkSuQmCC',
			'DFBD' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWklEQVR4nGNYhQEaGAYTpIn7QgNEQ11DGUMdkMQCpog0sDY6OgQgi7UCxRoCHUTQxYDqRJDcF7V0atjS0JVZ05Dch6YOv3noYljcEhoAFENz80CFHxUhFvcBAACrzZ+LQ2anAAAAAElFTkSuQmCC',
			'C073' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7WEMYAlhDA0IdkMREWhlDGBoCHQKQxAIaWVuBZIMIsliDSKNDo0NDAJL7olZNW5m1dNXSLCT3gdVNYWgIQNcbwIBqHtAORgdUMZBbWBsYUdwCdnMDA4qbByr8qAixuA8AiQbNC9SsKTMAAAAASUVORK5CYII=',
			'1EB4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7GB1EQ1lDGRoCkMRYHUQaWBsdGpHFREFiDQGtASh6weqmBCC5b2XW1LCloauiopDcB1Hn6IChtyEwNARDLKABix0oYqIhmG4eqPCjIsTiPgAJDMtaMvJVTQAAAABJRU5ErkJggg==',
			'5166' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAa0lEQVR4nGNYhQEaGAYTpIn7QkMYAhhCGaY6IIkFNDAGMDo6BASgiLEGsDY4OgggiQUGMADFGB2Q3Rc2bVXU0qkrU7OQ3dcKVOfoiGIeWKwh0EEE2Q4sYiJTGDDcAnRJKLqbByr8qAixuA8A6/bJgm8a66wAAAAASUVORK5CYII=',
			'0ACC' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7GB0YAhhCHaYGIImxBjCGMDoEBIggiYlMYW1lbRB0YEESC2gVaXQFmYDkvqil01amrlqZhew+NHVQMdFQdDGRKSB1qHawBog0OqK5hdFBpNEBzc0DFX5UhFjcBwCa2cs2z+baFQAAAABJRU5ErkJggg==',
			'DEE3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAU0lEQVR4nGNYhQEaGAYTpIn7QgNEQ1lDHUIdkMQCpog0sDYwOgQgi7WCxBgaRLCIBSC5L2rp1LCloauWZiG5D00dQfNQxLC4BZubByr8qAixuA8A2OzNgvxWkfEAAAAASUVORK5CYII=',
			'B6B4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZElEQVR4nGNYhQEaGAYTpIn7QgMYQ1hDGRoCkMQCprC2sjY6NKKItYo0sgJJVHUiDUB1UwKQ3BcaNS1saeiqqCgk9wVMEQWa5+iAbp5rQ2BoCIZYADa3oIhhc/NAhR8VIRb3AQDqsNAS5e4ZjwAAAABJRU5ErkJggg==',
			'C8A9' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcklEQVR4nGNYhQEaGAYTpIn7WEMYQximMEx1QBITaWVtZQhlCAhAEgtoFGl0dHR0EEEWa2BtZW0IhImBnRS1amXY0lVRUWFI7oOoC5iKqlek0TUUSKLZ4doQgGIHyC1AvShuAbkZZB6ymwcq/KgIsbgPADcbzVHHqu6/AAAAAElFTkSuQmCC',
			'DBC7' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYElEQVR4nGNYhQEaGAYTpIn7QgNEQxhCHUNDkMQCpoi0MjoENIggi7WKNLo2CKCLtbKCaCT3RS2dGrZ01aqVWUjug6prZcAwj2EKpphAAAOGWwIdsLgZRWygwo+KEIv7AHWDzcPaaAgKAAAAAElFTkSuQmCC',
			'5D95' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcElEQVR4nGNYhQEaGAYTpIn7QkNEQxhCGUMDkMQCGkRaGR0dHRhQxRpdGwJRxAIDwGKuDkjuC5s2bWVmZmRUFLL7WkUaHUKAJiDbDBJrQBULAIo5Au1AFhOZAnKLQwCy+1gDQG5mmOowCMKPihCL+wCLNsyF1IQprQAAAABJRU5ErkJggg==',
			'38E8' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAVElEQVR4nGNYhQEaGAYTpIn7RAMYQ1hDHaY6IIkFTGFtZW1gCAhAVtkq0ujawOgggiyGqg7spJVRK8OWhq6amoXsPmLNwyKGzS3Y3DxQ4UdFiMV9AFw+y4oXyJOJAAAAAElFTkSuQmCC',
			'30E4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYElEQVR4nGNYhQEaGAYTpIn7RAMYAlhDHRoCkMQCpjCGsDYwNCKLMbSytgLFWlHEpog0ugLJACT3rYyatjI1dFVUFLL7wOoYHVDNA4uFhmDagc0tKGLY3DxQ4UdFiMV9AL2GzKdDNhgOAAAAAElFTkSuQmCC',
			'B430' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaElEQVR4nGNYhQEaGAYTpIn7QgMYWhlDGVqRxQKmMExlbXSY6oAs1soQCiQDAlDUMboyNDo6iCC5LzRq6dJVU1dmTUNyX8AUkVYkdVDzREMdGgLRxEDuQLeDoRXdLdjcPFDhR0WIxX0AlJ/OKduszU4AAAAASUVORK5CYII=',
			'462D' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdElEQVR4nGNYhQEaGAYTpI37pjCGMIQyhjogi4WwtjI6OjoEIIkxhog0sjYEOoggibFOAfHgYmAnTZs2LWzVysysaUjuC5gi2srQyoiiNzRUpNFhCqoYwxSgWAC6GNAtDowobgG5mTU0ENXNAxV+1INY3AcAkEjKMawhll8AAAAASUVORK5CYII=',
			'CED0' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWUlEQVR4nGNYhQEaGAYTpIn7WENEQ1lDGVqRxURaRRpYGx2mOiCJBTQCxRoCAgKQxRpAYoEOIkjui1o1NWzpqsisaUjuQ1OHWwyLHdjcgs3NAxV+VIRY3AcARRzNFN4io9MAAAAASUVORK5CYII=',
			'CBBB' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWklEQVR4nGNYhQEaGAYTpIn7WENEQ1hDGUMdkMREWkVaWRsdHQKQxAIaRRpdGwIdRJDFGlDUgZ0UtWpq2NLQlaFZSO5DUwcTwzQPix3Y3ILNzQMVflSEWNwHACjTzQGpVvwqAAAAAElFTkSuQmCC',
			'97B7' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdElEQVR4nM3QsRGAMAhAUVLQW8R9YpGeQpZwClKwgbqBhZlSSqKWehq6d9zxL1AvT+BP80ofUs+ZA4/O4gwllyTRGamZ0NkUbY9c37rUdeO6T64PM5DtaXNZQ0Kh2VunKGYETUsULENqm804NPbV/z04N30HzNHMPG4prHoAAAAASUVORK5CYII=',
			'BEBE' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAT0lEQVR4nGNYhQEaGAYTpIn7QgNEQ1lDGUMDkMQCpog0sDY6OiCrC2gFijUEooqhqgM7KTRqatjS0JWhWUjuI9o8wnbgdPNAhR8VIRb3AQDHh8vecCEJmwAAAABJRU5ErkJggg==',
			'3B82' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYklEQVR4nGNYhQEaGAYTpIn7RANEQxhCGaY6IIkFTBFpZXR0CAhAVtkq0ujaEOgggiwGUdcgguS+lVFTw1aFrloVhew+iLpGBwzzAloZMMWmMGBxC6abGUNDBkH4URFicR8AT2jMR0g7E1oAAAAASUVORK5CYII=',
			'1ADA' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaklEQVR4nGNYhQEaGAYTpIn7GB0YAlhDGVqRxVgdGENYGx2mOiCJiTqwtrI2BAQEoOgVaXRtCHQQQXLfyqxpK1NXRWZNQ3IfmjqomGgoUCw0BLd5CLFGRxQx0RCgWCgjithAhR8VIRb3AQCSXcpGx9iOmAAAAABJRU5ErkJggg==',
			'882F' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7WAMYQxhCGUNDkMREprC2Mjo6OiCrC2gVaXRtCEQRA6ljQIiBnbQ0amXYqpWZoVlI7gOra2XEMM9hChaxAEYMOxgdUMVAbmYNRXXLQIUfFSEW9wEA3ezJYEW7S7AAAAAASUVORK5CYII=',
			'5417' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdElEQVR4nGNYhQEaGAYTpIn7QkMYWhmmMIaGIIkFNDBMZQhhaBBBFQtlRBMLDGB0ZZgCloO7L2za0qWrpq1amYXsvlYRoB1Ae5BtbhUNdZgC0o1kRyvILQwByGIiU8Duc0AWYw1gaGUMdUQRG6jwoyLE4j4AFo3LDxzlktoAAAAASUVORK5CYII=',
			'0B6D' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7GB1EQxhCGUMdkMRYA0RaGR0dHQKQxESmiDS6Njg6iCCJBbSKtLICTRBBcl/U0qlhS6euzJqG5D6wOkcMvUDzAlHEIHagimFzCzY3D1T4URFicR8AflLK5yVyHDkAAAAASUVORK5CYII=',
			'A110' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZklEQVR4nGNYhQEaGAYTpIn7GB0YAhimMLQii7EGMAYwhDBMdUASE5kCFA1hCAhAEgtoBelldBBBcl/U0lVRq6atzJqG5D40dWAYGoopBlGHzQ5UtwS0soYyhjqguHmgwo+KEIv7AL/iydKR7TMUAAAAAElFTkSuQmCC'        
        );
        $this->text = array_rand( $images );
        return $images[ $this->text ] ;    
    }
    
    function out_processing_gif(){
        $image = dirname(__FILE__) . '/processing.gif';
        $base64_image = "R0lGODlhFAAUALMIAPh2AP+TMsZiALlcAKNOAOp4ANVqAP+PFv///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAIACwAAAAAFAAUAAAEUxDJSau9iBDMtebTMEjehgTBJYqkiaLWOlZvGs8WDO6UIPCHw8TnAwWDEuKPcxQml0Ynj2cwYACAS7VqwWItWyuiUJB4s2AxmWxGg9bl6YQtl0cAACH5BAUKAAgALAEAAQASABIAAAROEMkpx6A4W5upENUmEQT2feFIltMJYivbvhnZ3Z1h4FMQIDodz+cL7nDEn5CH8DGZhcLtcMBEoxkqlXKVIgAAibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkphaA4W5upMdUmDQP2feFIltMJYivbvhnZ3V1R4BNBIDodz+cL7nDEn5CH8DGZAMAtEMBEoxkqlXKVIg4HibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpjaE4W5tpKdUmCQL2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8ONQMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpS6E4W5spANUmGQb2feFIltMJYivbvhnZ3d1x4JMgIDodz+cL7nDEn5CH8DGZgcBtMMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmFQX2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZBMJNIMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpz6E4W5tpCNUmAQD2feFIltMJYivbvhnZ3R1B4FNRIDodz+cL7nDEn5CH8DGZg8HNYMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAkKAAgALAEAAQASABIAAAROEMkpQ6A4W5spIdUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZAsGtUMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IADs=";
        $binary = is_file($image) ? join("",file($image)) : base64_decode($base64_image); 
        header("Cache-Control: post-check=0, pre-check=0, max-age=0, no-store, no-cache, must-revalidate");
        header("Pragma: no-cache");
        header("Content-type: image/gif");
        echo $binary;
    }

}
# end of class phpfmgImage
# ------------------------------------------------------
# end of module : captcha


# module user
# ------------------------------------------------------
function phpfmg_user_isLogin(){
    return ( isset($_SESSION['authenticated']) && true === $_SESSION['authenticated'] );
}


function phpfmg_user_logout(){
    session_destroy();
    header("Location: admin.php");
}

function phpfmg_user_login()
{
    if( phpfmg_user_isLogin() ){
        return true ;
    };
    
    $sErr = "" ;
    if( 'Y' == $_POST['formmail_submit'] ){
        if(
            defined( 'PHPFMG_USER' ) && strtolower(PHPFMG_USER) == strtolower($_POST['Username']) &&
            defined( 'PHPFMG_PW' )   && strtolower(PHPFMG_PW) == strtolower($_POST['Password']) 
        ){
             $_SESSION['authenticated'] = true ;
             return true ;
             
        }else{
            $sErr = 'Login failed. Please try again.';
        }
    };
    
    // show login form 
    phpfmg_admin_header();
?>
<form name="frmFormMail" action="" method='post' enctype='multipart/form-data'>
<input type='hidden' name='formmail_submit' value='Y'>
<br><br><br>

<center>
<div style="width:380px;height:260px;">
<fieldset style="padding:18px;" >
<table cellspacing='3' cellpadding='3' border='0' >
	<tr>
		<td class="form_field" valign='top' align='right'>Email :</td>
		<td class="form_text">
            <input type="text" name="Username"  value="<?php echo $_POST['Username']; ?>" class='text_box' >
		</td>
	</tr>

	<tr>
		<td class="form_field" valign='top' align='right'>Password :</td>
		<td class="form_text">
            <input type="password" name="Password"  value="" class='text_box'>
		</td>
	</tr>

	<tr><td colspan=3 align='center'>
        <input type='submit' value='Login'><br><br>
        <?php if( $sErr ) echo "<span style='color:red;font-weight:bold;'>{$sErr}</span><br><br>\n"; ?>
        <a href="admin.php?mod=mail&func=request_password">I forgot my password</a>   
    </td></tr>
</table>
</fieldset>
</div>
<script type="text/javascript">
    document.frmFormMail.Username.focus();
</script>
</form>
<?php
    phpfmg_admin_footer();
}


function phpfmg_mail_request_password(){
    $sErr = '';
    if( $_POST['formmail_submit'] == 'Y' ){
        if( strtoupper(trim($_POST['Username'])) == strtoupper(trim(PHPFMG_USER)) ){
            phpfmg_mail_password();
            exit;
        }else{
            $sErr = "Failed to verify your email.";
        };
    };
    
    $n1 = strpos(PHPFMG_USER,'@');
    $n2 = strrpos(PHPFMG_USER,'.');
    $email = substr(PHPFMG_USER,0,1) . str_repeat('*',$n1-1) . 
            '@' . substr(PHPFMG_USER,$n1+1,1) . str_repeat('*',$n2-$n1-2) . 
            '.' . substr(PHPFMG_USER,$n2+1,1) . str_repeat('*',strlen(PHPFMG_USER)-$n2-2) ;


    phpfmg_admin_header("Request Password of Email Form Admin Panel");
?>
<form name="frmRequestPassword" action="admin.php?mod=mail&func=request_password" method='post' enctype='multipart/form-data'>
<input type='hidden' name='formmail_submit' value='Y'>
<br><br><br>

<center>
<div style="width:580px;height:260px;text-align:left;">
<fieldset style="padding:18px;" >
<legend>Request Password</legend>
Enter Email Address <b><?php echo strtoupper($email) ;?></b>:<br />
<input type="text" name="Username"  value="<?php echo $_POST['Username']; ?>" style="width:380px;">
<input type='submit' value='Verify'><br>
The password will be sent to this email address. 
<?php if( $sErr ) echo "<br /><br /><span style='color:red;font-weight:bold;'>{$sErr}</span><br><br>\n"; ?>
</fieldset>
</div>
<script type="text/javascript">
    document.frmRequestPassword.Username.focus();
</script>
</form>
<?php
    phpfmg_admin_footer();    
}


function phpfmg_mail_password(){
    phpfmg_admin_header();
    if( defined( 'PHPFMG_USER' ) && defined( 'PHPFMG_PW' ) ){
        $body = "Here is the password for your form admin panel:\n\nUsername: " . PHPFMG_USER . "\nPassword: " . PHPFMG_PW . "\n\n" ;
        if( 'html' == PHPFMG_MAIL_TYPE )
            $body = nl2br($body);
        mailAttachments( PHPFMG_USER, "Password for Your Form Admin Panel", $body, PHPFMG_USER, 'You', "You <" . PHPFMG_USER . ">" );
        echo "<center>Your password has been sent.<br><br><a href='admin.php'>Click here to login again</a></center>";
    };   
    phpfmg_admin_footer();
}


function phpfmg_writable_check(){
 
    if( is_writable( dirname(PHPFMG_SAVE_FILE) ) && is_writable( dirname(PHPFMG_EMAILS_LOGFILE) )  ){
        return ;
    };
?>
<style type="text/css">
    .fmg_warning{
        background-color: #F4F6E5;
        border: 1px dashed #ff0000;
        padding: 16px;
        color : black;
        margin: 10px;
        line-height: 180%;
        width:80%;
    }
    
    .fmg_warning_title{
        font-weight: bold;
    }

</style>
<br><br>
<div class="fmg_warning">
    <div class="fmg_warning_title">Your form data or email traffic log is NOT saving.</div>
    The form data (<?php echo PHPFMG_SAVE_FILE ?>) and email traffic log (<?php echo PHPFMG_EMAILS_LOGFILE?>) will be created automatically when the form is submitted. 
    However, the script doesn't have writable permission to create those files. In order to save your valuable information, please set the directory to writable.
     If you don't know how to do it, please ask for help from your web Administrator or Technical Support of your hosting company.   
</div>
<br><br>
<?php
}


function phpfmg_log_view(){
    $n = isset($_REQUEST['file'])  ? $_REQUEST['file']  : '';
    $files = array(
        1 => PHPFMG_EMAILS_LOGFILE,
        2 => PHPFMG_SAVE_FILE,
    );
    
    phpfmg_admin_header();
   
    $file = $files[$n];
    if( is_file($file) ){
        if( 1== $n ){
            echo "<pre>\n";
            echo join("",file($file) );
            echo "</pre>\n";
        }else{
            $man = new phpfmgDataManager();
            $man->displayRecords();
        };
     

    }else{
        echo "<b>No form data found.</b>";
    };
    phpfmg_admin_footer();
}


function phpfmg_log_download(){
    $n = isset($_REQUEST['file'])  ? $_REQUEST['file']  : '';
    $files = array(
        1 => PHPFMG_EMAILS_LOGFILE,
        2 => PHPFMG_SAVE_FILE,
    );

    $file = $files[$n];
    if( is_file($file) ){
        phpfmg_util_download( $file, PHPFMG_SAVE_FILE == $file ? 'form-data.csv' : 'email-traffics.txt', true, 1 ); // skip the first line
    }else{
        phpfmg_admin_header();
        echo "<b>No email traffic log found.</b>";
        phpfmg_admin_footer();
    };

}


function phpfmg_log_delete(){
    $n = isset($_REQUEST['file'])  ? $_REQUEST['file']  : '';
    $files = array(
        1 => PHPFMG_EMAILS_LOGFILE,
        2 => PHPFMG_SAVE_FILE,
    );
    phpfmg_admin_header();

    $file = $files[$n];
    if( is_file($file) ){
        echo unlink($file) ? "It has been deleted!" : "Failed to delete!" ;
    };
    phpfmg_admin_footer();
}


function phpfmg_util_download($file, $filename='', $toCSV = false, $skipN = 0 ){
    if (!is_file($file)) return false ;

    set_time_limit(0);


    $buffer = "";
    $i = 0 ;
    $fp = @fopen($file, 'rb');
    while( !feof($fp)) { 
        $i ++ ;
        $line = fgets($fp);
        if($i > $skipN){ // skip lines
            if( $toCSV ){ 
              $line = str_replace( chr(0x09), ',', $line );
              $buffer .= phpfmg_data2record( $line, false );
            }else{
                $buffer .= $line;
            };
        }; 
    }; 
    fclose ($fp);
  

    
    /*
        If the Content-Length is NOT THE SAME SIZE as the real conent output, Windows+IIS might be hung!!
    */
    $len = strlen($buffer);
    $filename = basename( '' == $filename ? $file : $filename );
    $file_extension = strtolower(substr(strrchr($filename,"."),1));

    switch( $file_extension ) {
        case "pdf": $ctype="application/pdf"; break;
        case "exe": $ctype="application/octet-stream"; break;
        case "zip": $ctype="application/zip"; break;
        case "doc": $ctype="application/msword"; break;
        case "xls": $ctype="application/vnd.ms-excel"; break;
        case "ppt": $ctype="application/vnd.ms-powerpoint"; break;
        case "gif": $ctype="image/gif"; break;
        case "png": $ctype="image/png"; break;
        case "jpeg":
        case "jpg": $ctype="image/jpg"; break;
        case "mp3": $ctype="audio/mpeg"; break;
        case "wav": $ctype="audio/x-wav"; break;
        case "mpeg":
        case "mpg":
        case "mpe": $ctype="video/mpeg"; break;
        case "mov": $ctype="video/quicktime"; break;
        case "avi": $ctype="video/x-msvideo"; break;
        //The following are for extensions that shouldn't be downloaded (sensitive stuff, like php files)
        case "php":
        case "htm":
        case "html": 
                $ctype="text/plain"; break;
        default: 
            $ctype="application/x-download";
    }
                                            

    //Begin writing headers
    header("Pragma: public");
    header("Expires: 0");
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
    header("Cache-Control: public"); 
    header("Content-Description: File Transfer");
    //Use the switch-generated Content-Type
    header("Content-Type: $ctype");
    //Force the download
    header("Content-Disposition: attachment; filename=".$filename.";" );
    header("Content-Transfer-Encoding: binary");
    header("Content-Length: ".$len);
    
    while (@ob_end_clean()); // no output buffering !
    flush();
    echo $buffer ;
    
    return true;
 
    
}
?>