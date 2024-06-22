//U20026580

const dataset = [100, 420, 230, 850, 560, 925];

            const svgWidth = 500;
            const barHeight = 30;
            const barMargin = 5;
            const svgHeight = dataset.length * (barHeight + barMargin);

            const svg = d3.select("body").append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

            const xScale = d3.scaleLinear()
            .domain([0, d3.max(dataPoints)])
            .range([50, svgWidth]);

            const barGroups = svg.selectAll("g")
            .data(dataPoints)
            .enter()
            .append("g")
            .attr("transform", (d, i) => 'translate(0, ${i * (barHeight + barMargin)})');

            barGroups.append("rect")
            .attr("class", "bar")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 0)
            .attr("height", barHeight)
            .transition()
            .duration(1000)
            .attr("width", d => xScale(d))
            .attr("fill", "steelblue");

            barGroups.append("text")
            .attr("class", "label")
            .attr("x", d => xScale(d) -5)
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(d => d);

            barGroups.selectAll(".bar")
            .on("mouseover", function() {
                d3.select(this)
                .attr("fill", "black");
            })
            .on("mouseout", function() {
                d3.select(this)
                .attr("fill", "orange");
            })