function calculate(){
	var max = parseInt(document.getElementById("maxValInput").value, 10);
	console.log("Got max");
	var min = parseInt(document.getElementById("minValInput").value, 10);
	console.log("Got min");
	var precision = parseFloat(document.getElementById("precInput").value, 10);
	console.log("Got prec");
	var itot = max - min;
	console.log("Calcd itot");
	var nvar = (itot/precision) + 1;
	console.log("Calcd nvar");
	nbit = Math.log2(nvar);
	console.log("Calcd nbit log");
	nbit = Math.ceil(nbit);
	console.log("Calcd nvbit round");
	document.getElementById("resultLabel").innerText = nbit;
	console.log("Set result label to: " + nbit);
}
