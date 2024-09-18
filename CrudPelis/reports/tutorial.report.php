<?php
require('../reports/fpdf.php');

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,'HOLA MUNDO :3');
$pdf->Image('../public/img/llave.png', 10, 20, 100);
$pdf->Output();
?>