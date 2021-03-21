import { User } from './User';
import { Company } from './Company';

//Instruction to every other class

//on how they can be an argument to 'addMarker

interface Mappable {
	location: {
		lat: Number;
		lng: Number;
	};
}
export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	addMarker(mappable: Mappable): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			}
		});
	}

	// addCompanyMarker(company: Company): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: company.location.lat,
	// 			lng: company.location.lng
	// 		}
	// 	});
	// }
}
