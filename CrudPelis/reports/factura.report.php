<?php
require('../reports/fpdf.php');   require_once("../models/factura.model.php");

$pdf = new FPDF();
$pdf->AddPage();
$factura = new Factura();  
$pdf->SetFont('Arial', 'B', 12);
$pdf->Text(30, 10, ' Facturas_Report');
$pdf->SetFont('Arial', '', 12);
$pdf->MultiCell(0, 5, iconv('UTF-8', 'windows-1252', $texto), 0, 'J');

//  listado de facturas
$listafactura = $factura->todos();  

// Obtener datos
if ($listafactura) {
    $pdf->Ln(10); // Espaciado

    // Tablas facturas
    $pdf->Cell(10, 10, "#", 1);
    $pdf->Cell(30, 10, "ID Factura", 1);
    $pdf->Cell(40, 10, "Fecha", 1);
    $pdf->Cell(30, 10, "Sub Total", 1);
    $pdf->Cell(30, 10, "Sub Total IVA", 1);
    $pdf->Cell(30, 10, "Valor IVA", 1);
    $pdf->Cell(40, 10, "ID Cliente", 1);
    $pdf->Ln();

    // Llenar la tabla con los datos de factura
    $index = 1;
    while ($factura = mysqli_fetch_assoc($listafactura)) {
        $pdf->Cell(10, 10, $index, 1);
        $pdf->Cell(30, 10, $factura["idFactura"], 1);
        $pdf->Cell(40, 10, $factura["Fecha"], 1);
        $pdf->Cell(30, 10, $factura["Sub_total"], 1);
        $pdf->Cell(30, 10, $factura["Sub_total_iva"], 1);
        $pdf->Cell(30, 10, $factura["Valor_IVA"], 1);
        $pdf->Cell(40, 10, $factura["Clientes_idClientes"], 1);
        $pdf->Ln();
        $index++;
    }
} else {
    
    $pdf->Ln(20);
    $pdf->Cell(0, 10, 'error.', 1, 1, 'C');
}




// Ejecucion PDF.
$pdf->Output();
?>
