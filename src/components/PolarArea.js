import { PolarArea1 } from '../BaseCharts'

export default {
  extends: PolarArea1,
  mounted () {
    this.renderChart({
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}