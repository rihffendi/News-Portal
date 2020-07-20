$(document).ready(function () {
	$('#search').change(function(){
		$('.col-md-3').remove();
		var query = $('#search').val();

		let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+query+"&api-key=9LHhUSpYdwZOJChV6eGlnGdzwDAt7SHQ";
	
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

	      		if(newsdata.response.docs.length === 0){
	      			$('.col-3').remove();
	      			$('#footer').addClass('fixed-bottom');
	      			$('#news').append(`
						<div class="col-12 text-center">
							<h4>No result round</h4>
						</div>
	      				`);
	      		}
	      		else {
	      			$('#footer').removeClass('fixed-bottom');
	      			for(var i = 0; i < newsdata.response.docs['length']; i++) {
	      			$('.col-12').remove();
	      			var g = new Date(newsdata.response.docs[i].pub_date);

		      		if(newsdata.response.docs[i].multimedia.length === 0){
		      		$('#news').append(`
		      			
							<div class="col-md-3 pb-3">
					           <div class="card">
					             <div class="card-img-top">
					             	<img src ="img/thumbnail.jpg" alt="" />
					             </div>
					             <div class="card-body">
					             <span class="badge badge-danger p-2 mb-2">`+ newsdata.response.docs[i].section_name+`</span>
					               <h6 class="card-title">
					               <a href="` + newsdata.response.docs[i].web_url +`" title="` + newsdata.response.docs[i].headline.main +`">` + newsdata.response.docs[i].headline.main +`</a>
					               </h6>
					               <p>` + newsdata.response.docs[i].abstract +`</p>
					             </div>
					             <div class="card-footer">
									<a href="#">`+ newsdata.response.docs[i].byline.original +`</a> <br />
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
					             	<img src = "https://static01.nyt.com/`+ newsdata.response.docs[i].multimedia[0]['url'] +`" alt="" />

					             </div>
					              <div class="card-body">
					             <span class="badge badge-danger p-2 mb-2">`+ newsdata.response.docs[i].section_name+`</span>
					               <h6 class="card-title">
					               <a href="` + newsdata.response.docs[i].web_url +`" title="` + newsdata.response.docs[i].headline.main +`">` + newsdata.response.docs[i].headline.main +`</a>
					               </h6>
					               <p>` + newsdata.response.docs[i].abstract +`</p>
					             </div>
					             <div class="card-footer">
									<a href="#">`+ newsdata.response.docs[i].byline.original +`</a> <br />
									<a class="font-weight-light" href="'#">`+ g.toDateString() +`</a>
					             </div>
					            </div>
					        </div>
				        
		      			`);
		      		}

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