<?php 
	session_start();
	header("Access-Control-Allow-Origin: *");
	
	include "../database/database.php";
	include "../database/function.php";
	
	$success = "success";
	$email = sanitize($_POST['email']);
	
	$sql = "select * from dmsproduct where sku='".$email."'";
	$result = $dbLink->query($sql); 
	if($result) 
	{
	    if($result->num_rows == 0) 	
	    {  
			$success = " ";
		}
		else 
		{
			while($row = $result->fetch_assoc())  
			{     
				$artistid = $row['product_id'];  
				$a = rand();
				$sqlupdate = "update dmsproduct set weight='{$a}' where product_id='{$artistid}'";
				$result = $dbLink->query($sqlupdate);
				if($result) 
				{
					if($result->num_rows == 0) 	
					{ 
						$success = "updatefailed";
					}
				else     
				{    
					$artistname = $row['name'];  
					$mailnotsent = "true";
					$rahulname = $artistname;  
					$rahulto = $_POST['email'];
					$rahulsub = "You requested Artistivity password";
					$c = rand().rand();
					
					$rahulhtmlbody = "
								     <body style='margin:0px; padding:0px'>
								        <table width='650' border='0' align='center' cellpadding='0' cellspacing='0'>
								            <tr>
								                <td bgcolor='#000000' style='padding:6px'>
								                    <table width='100%' border='0' cellspacing='0' cellpadding='0'>
								                        <tr>
								                            <td height='83' background='http://artistivity.com/new/images/mailer/artistivity-welcome-mailer_img02.jpg' bgcolor='#DE2128'>
								                                <table width='100%' border='0' cellspacing='0' cellpadding='0'>
								                                    <tr>
								                                        <td width='50%' height='83' style='font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#fff; line-height:16px'>
								                                            <img src='http://artistivity.com/new/images/mailer/artistivity-welcome-mailer_img01.jpg' width='239' height='83' alt='artistivity' />
								                                        </td>
								                                        <td width='50%'>
								                                            <table width='150' border='0' align='right' cellpadding='0' cellspacing='0'>
								                                                <tr>
								                                                    <td width='30' align='center'>
								                                                        <img src='http://artistivity.com/new/images/mailer/artistivity-welcome-mailer_img08.jpg' width='17' height='13' alt='' />
								                                                    </td>
								                                                    <td width='120'><a href='mailto:info@artistivity.com' target='_blank' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#fff; text-decoration:none'>info@artistivity.com</a>
								                                                    </td>
								                                                </tr>
								                                                <tr>
								                                                    <td height='8' colspan='2'></td>
								                                                </tr>
								                                                <tr>
								                                                    <td align='center'>
								                                                        <img src='http://artistivity.com/new/images/mailer/artistivity-welcome-mailer_img09.jpg' width='17' height='13' alt='' />
								                                                    </td>
								                                                    <td style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#fff;'>+91 9820505445</td>
								                                                </tr>
								                                            </table>
								                                        </td>
								                                    </tr>
								                                </table>
								                            </td>
								                        </tr>
								                        <tr>
								                            <td height='332' valign='top' background='http://artistivity.com/new/images/mailer/artistivity-welcome-mailer_img03.jpg'>
								                                <table width='615' border='0' align='center' cellpadding='0' cellspacing='0'>
								                                    <tr>
								                                        <td>&nbsp;</td>
								                                    </tr>
								                                    <tr>
								                                        <td bgcolor='#1a1a1a' style='border-left:4px solid #df2028; padding:10px'>
								                                            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
								                                                <tr>
								                                                    
								<td style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#ffffff;'>
								<br/><br/><br/>
								Hi <b>{$artistname}<b>,<br/><br/><span style='color:#ffffff;'>You recently asked to reset your Artistivity password.</span><br/>
								<a href='http://artistivity.com/forgotpassword?passwordtoken={$c}&email={$_POST['email']}&confirmation={$a}'>Click here to change your password.</a><br/>Alternatively, you can enter the following password reset code:
								{$a}
								<br/><br/><br/>													
								A Movement we call Artistivity!
								<br/>Team Artistivity
								</td>
								                                         
								                                                </tr>
								                                            </table>
								                                        </td>
								                                    </tr>
								                                </table>
								                            </td>
								                        </tr>
								                        <tr>
								                            <td>
								                                
								                            </td>
								                        </tr>
								                        <tr>
								                            <td bgcolor='#1a1a1a' style='padding:10px'>
								                                <table width='100%' border='0' cellspacing='0' cellpadding='0'>
								                                    <tr>
								                                        <td width='51%' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#666666;'>Copyright © 2013 Artistivity</td>
								                                        <td width='49%'>
								                                            <table border='0' align='right' cellpadding='0' cellspacing='0'>
								                                                <tr>
								                                                    <td style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#666666; padding-right:5px'>Follow us on:</td>
								                                                    <td>
								                                                        <a href='http://facebook.com/artistivity1' target='_blank' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#666666;'>
								                                                            <img src='http://artistivity.com/new/images/mailer/artistivity-welcome-mailer_img05.jpg' width='33' height='28' alt='Facebook' border='0' />
								                                                        </a>
								                                                    </td>
								                                                    <td>
								                                                        <a href='http://twitter.com/' target='_blank' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#666666;'>
								                                                            <img src='http://artistivity.com/new/images/mailer/artistivity-welcome-mailer_img04.jpg' width='33' height='28' alt='Twitter' border='0' />
								                                                        </a>
								                                                    </td>
								                                                    <td>
								                                                        <a href='http://youtube.com/' target='_blank' style='font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#666666;'>
								                                                            <img src='http://artistivity.com/new/images/mailer/artistivity-welcome-mailer_img06.jpg' width='33' height='28' alt='Youtube' border='0' />
								                                                        </a>
								                                                    </td>
								                                                </tr>
								                                            </table>
								                                        </td>
								                                    </tr>
								                                </table>
								                            </td>
								                        </tr>
								                    </table>
								                </td>
								            </tr>
								        </table>";
					$rahulbody = $rahulhtmlbody;
					
					include $_SERVER['DOCUMENT_ROOT']."/artistivity/PHPMailer/rahul.php";

?>
