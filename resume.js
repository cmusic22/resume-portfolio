console.log('resume.js has loaded')
//navigation links for schooling, opening the accordian
let canvasOrganicT = document.querySelector('#organicT-barchart')
let canvasOrganicRAQ = document.querySelector('#organicRAQ-barchart')
let cOT = canvasOrganicT.getContext('2d')
let cORAQ = canvasOrganicRAQ.getContext('2d')

canvasOrganicT.Chart ({
	type: 'doughnut',
	data: {
		datasets: [
			{
				data: [94],
				bacgroundColor: '#0E0B16'
			}
		]
	}
})

new Chart (cORAQ, {
	type: 'doughnut',
	data: {
		datasets: [
			{
				data: [],
				bacgroundColor: []
			}
		]
	}
})