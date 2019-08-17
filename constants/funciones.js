export let fecha = (dia, fecha) => {
		let mes = fecha.substr(4, 2)
		let dia2 = fecha.substr(6, 2)
		let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
		mes<10?mes=mes.substr(1,1):mes=mes
		return dia+" "+dia2+" de "+meses[mes-1]
	}