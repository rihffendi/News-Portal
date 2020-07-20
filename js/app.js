$(document).ready(function () {

		//Home Page Data (defaut)

	  	let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=9LHhUSpYdwZOJChV6eGlnGdzwDAt7SHQ";
	  
	  	$('.col-12').remove();
	  
	  $.ajax({
	    url: url,
	    method: "GET",
	    dataType: "JSON",

	    beforeSend: function () {
	       $("#loader").show();
	    },

	    complete: function () {
	      $("#loader").hide();
	    },

	    success: function (newsdata) {
	      	      	
	      	for(var i = 0; i < newsdata.results['length']; i++) {

	      		var g = new Date(newsdata.results[i].published_date);
	      		if(newsdata.results[i].multimedia === null){
	      		$('#news').append(`
	      			
						<div class="col-md-3 pb-3">
				           <div class="card">
				             <div class="card-img-top">
				             	<img src ="img/thumbnail.jpg" alt="" />
				             </div>
				             <div class="card-body">
				             <span class="badge badge-danger p-2 mb-2">`+ newsdata.results[i].section+`</span>
				               <h6 class="card-title">
				               <a href="` + newsdata.results[i].url +`" title="` + newsdata.results[i].title +`">` + newsdata.results[i].title +`</a>
				               </h6>
				               <p>` + newsdata.results[i].abstract +`</p>
				             </div>
				             <div class="card-footer">
								<a href="#">`+ newsdata.results[i].byline +`</a> <br />
								<a class="font-weight-light" href="'#">`+ g.toDateString() +`</a>
				             </div>
				            </div>
				        </div>
			        
	      			`);
	      		
	      		}
	      		else {
	      		$('#news').append(`
	      			
						<div class="col-md-3 pb-3">
				           <div class="card">
				             <div class="card-img-top">
				             	<img src = "`+ newsdata.results[i].multimedia[0]['url'] +`" alt="" />
				             </div>
				             <div class="card-body">
				             <span class="badge badge-danger p-2 mb-2">`+ newsdata.results[i].section + ` - `+ newsdata.results[i].subsection +`</span>
				               <h6 class="card-title">
				               <a href="` + newsdata.results[i].url +`" title="` + newsdata.results[i].title +`">` + newsdata.results[i].title +`</a>
				               </h6>
				               <p>` + newsdata.results[i].abstract +`</p>
				             </div>
				             <div class="card-footer">
								<a href="#">`+ newsdata.results[i].byline +`</a> <br />
								<a class="font-weight-light" href="'#">`+ g.toDateString() +`</a>
				             </div>
				            </div>
				        </div>
			        
	      			`);
	      		}
	      
	      	}
	    },

	    error: function () {
	      let errorMsg = `<div class="alert alert-danger center">Some error occured</div>`;
	      $("#blog").html(errorMsg);
	    }
	  });

	// fetching data by selecting item from menu


	$('.nav-link').click(function(){
		var menu = $(this).text().trim();
		$('.col-12').remove();
  		$('.col-md-3').remove();
  		$('#footer').removeClass('fixed-bottom');
  	
  		let url = "https://api.nytimes.com/svc/topstories/v2/"+menu+".json?api-key=9LHhUSpYdwZOJChV6eGlnGdzwDAt7SHQ";

	  $.ajax({
	    url: url,
	    method: "GET",
	    dataType: "JSON",

	    beforeSend: function () {
	       $("#loader").show();
	    },

	    complete: function () {
	      $("#loader").hide();
	    },

	    success: function (newsdata) {
	    	
	      	for(var i = 0; i < newsdata.results['length']; i++) {

	      		var g = new Date(newsdata.results[i].published_date);

	      		if(newsdata.results[i].multimedia === null){

	      		$('#news').append(`
	      			
						<div class="col-md-3 pb-3">
				           <div class="card">
				             <div class="card-img-top">
				             	<img src ="img/thumbnail.jpg" alt="" />
				             </div>
				             <div class="card-body">
				             <span class="badge badge-danger p-2 mb-2">`+ newsdata.results[i].section+`</span>
				               <h6 class="card-title">
				               <a href="` + newsdata.results[i].url +`" title="` + newsdata.results[i].title +`">` + newsdata.results[i].title +`</a>
				               </h6>
				               <p>` + newsdata.results[i].abstract +`</p>
				             </div>
				             <div class="card-footer">
								<a href="#">`+ newsdata.results[i].byline +`</a> <br />
								<a class="font-weight-light" href="'#">`+ g.toDateString() +`</a>
				             </div>
				            </div>
				        </div>
			        
	      			`);
	      		
	      		}
	      		else {
	      		$('#news').append(`
	      			
						<div class="col-md-3 pb-3">
				           <div class="card">
				             <div class="card-img-top">
				             	<img src = "`+ newsdata.results[i].multimedia[0]['url'] +`" alt="" />

				             </div>
				             <div class="card-body">
				             <span class="badge badge-danger p-2 mb-2">`+ newsdata.results[i].section + ` - `+ newsdata.results[i].subsection +`</span>
				               <h6 class="card-title">
				               <a href="` + newsdata.results[i].url +`" title="` + newsdata.results[i].title +`">` + newsdata.results[i].title +`</a>
				               </h6>
				               <p>` + newsdata.results[i].abstract +`</p>
				             </div>
				             <div class="card-footer">
								<a href="#">`+ newsdata.results[i].byline +`</a> <br />
								<a class="font-weight-light" href="'#">`+ g.toDateString() +`</a>
				             </div>
				            </div>
				        </div>
			        
	      			`);
	      		}
	      
	      	}
	    },

	    error: function () {
	      let errorMsg = `<div class="alert alert-danger center">Some error occured</div>`;
	      $("#blog").html(errorMsg);
	    }
	  });

	});
});