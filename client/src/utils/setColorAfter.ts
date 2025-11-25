export default function setColorAfter(row:number){
    let color = ''
    switch (row) {
      case 0:
    color = 'aqua'
        break;
      case 1:
    color = 'rgb(192, 91, 91)'
        break;
      case 2:
    color = 'cadetblue'
        break;
        case 3:
    color = 'chartreuse'
        break
        case 4:
    color = 'chocolate'
        break
        case 5:
    color = 'cornflowerblue'
        break
        case 6:
    color = 'crimson'
        break 
    }
    return color
  }