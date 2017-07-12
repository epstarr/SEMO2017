PopularQueryRenderer = function(container) {
  this.container = container;
};

PopularQueryRenderer.prototype.render = function(queries) {
  // how many terms to show
  var numberOfPopularQueriesToShow = 12;
  if ((typeof queries.maxNumberOfPopularQueries == "number") &&
      (queries.maxNumberOfPopularQueries < numberOfPopularQueriesToShow)) {
    numberOfPopularQueriesToShow = queries.maxNumberOfPopularQueries;
  }
  document.createElement("div");
  for (var i = 0; i < numberOfPopularQueriesToShow; i++) {
    var item = document.createElement("div");
    item.setAttribute("class", 'item');
    var a = document.createElement("a");
    // Instead of using CSE href, generate one based on the term
    a.setAttribute("href", 'http://www.semo.edu/search_results.html?q=' + queries.popularQueries[i].query);
    a.setAttribute("class", 'term');
    a.appendChild(document.createTextNode(queries.popularQueries[i].query));
    item.appendChild(a);
    this.container.appendChild(item);
    this.container.appendChild(document.createTextNode(" "));
  }
  document.appendChild("div");
};
