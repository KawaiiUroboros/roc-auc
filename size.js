let container, svg, x, y, line;

if (typeof size === "undefined") size = {};

function axes(width, height, margin) {
  two_third = (margin * 2) / 3;
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.svg.axis().scale(x).orient("bottom"));
  svg
    .append("text")
    .attr("class", "x-label")
    .attr(
      "transform",
      "translate(" + width / 2 + "," + (height + two_third) + ")"
    )
    .text("X");
  svg
    .append("text")
    .attr("class", "x-label2")
    .attr(
      "transform",
      "translate(" +
        (width / 2 + 3.3 * two_third) +
        "," +
        (height - two_third / 2) +
        ")"
    )
    .text("False Positive Probability");

  svg
    .append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left"));
  svg
    .append("text")
    .attr("class", "y-label")
    .attr("transform", "translate(" + -two_third + "," + height / 2 + ")")
    .text("Y");
}

// x, y -- coords; cls -- class
function point(x, y, r, cls) {
  let fill = cls ? "purple" : "green";
  svg
    .append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", r)
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr('fill', fill);
}

size.init = function (id, width, height, margin) {
  container = d3.select("#" + id);
  (x = d3.scale.linear().domain([0, 1]).range([0, width])),
    (y = d3.scale.linear().domain([0, 1]).range([height, 0]));
  line = d3.svg
    .line()
    .x(function (d) {
      return x(d.x);
    })
    .y(function (d) {
      return y(d.y);
    });
  svg = container
    .append("svg")
    .attr("width", width + 2 * margin)
    .attr("height", height + 2 * margin)
    .append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");
  axes(width, height, margin);

    // for(let i = 0; i < 30; i++){

    //     point(Math.random(), 5, 4, 0);
    // }
};
