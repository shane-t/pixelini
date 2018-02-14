import React from 'react';

export default class Uploads extends React.Component {

  handleFiles(evt) {
		const input = evt.target;
		if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = e => {
					const img = new Image();
					img.src = e.target.result;
					setTimeout(() => {
						//have to wait for image to get dimensions?
						const canvas = document.createElement('canvas');
						const { width, height } = img;
						canvas.width = img.width;
						canvas.height = img.height;
						const ctx = canvas.getContext('2d');
						ctx.drawImage(img, 0, 0, width, height);
						const rows = [];
						const imgd = ctx.getImageData(0,0,width,height);
						const pix = imgd.data;
						let col = 0;
						let cols = [];
						for (let i = 0, n = pix.length; i < n; i += 4) {
							if (col > 0 && col  % img.width === 0) {
								rows.push(cols);
								cols = [];
							}
							const rgba = pix[i] + ',' + pix[i+1] + ',' + pix[i+2] + ',' + (pix[i+3] / 255)
							const color = { color : { name : 'LOADED', rgba } };
							cols.push(color);
							col++;
						}
						//push final row
						rows.push(cols);
						this.props.open(width, height, rows);
					},0);
				};

				reader.readAsDataURL(input.files[0]);
		}
  }

  render () {
    return (
        <small>Open: <input type='file' title=' ' onChange={this.handleFiles.bind(this)} /></small>
    );
  }

};
