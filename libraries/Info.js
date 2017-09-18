// r = variable to store random to select file to display
// tf = total number of files


function Info(r, folder, sfile, data.info[0].totalFiles) {
  this.r = random(0, 1);
    if (this.r <= (15 / totalFiles)) { // select folder 0
        this.folder = 0;
        this.sfile = ceil(random(0, data.info[0].totalFiles));
    } else if (this.r > (15 / tf) && this.r <= (23 / tf)) { // select folder 1
        this.folder = 1;
        this.sfile = ceil(random(0, data.info[1].totalFiles));
    } else if (this.r > (23 / tf) && this.r <= (25 / tf)) { // select folder 2
        this.folder = 2;
        this.sfile = ceil(random(0, data.info[2].totalFiles));
    } else if (this.r > (25 / tf) && this.r <= 1) { // select folder 3
        this.folder = 3;
        this.sfile = ceil(random(0, data.info[3].totalFiles));
    } else {
      // *** PUT TEXT AND DEFAULT IMAGE HERE NOTIFYING ADMIN HERE ***
      text('Error: Contact admin', width / 2, height / 2, width / 3, height / 5);
      print('Error: Contact admin');
    }
}