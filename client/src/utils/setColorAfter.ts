export default function setColorAfter(row:number){
    let color = ''
    switch (row) {
      case 0:
    color = 'linear-gradient(145deg, #66B2FF 0%, #24629fff 80%)'
        break;
      case 1:
    color = 'linear-gradient(145deg, #8ec6ffff 0%, #3779baff 80%)'
        break;
      case 2:
    color = 'linear-gradient(145deg, #9ac9f8ff 0%, #4791daff 80%)'
        break;
        case 3:
    color = 'linear-gradient(145deg, #aad4ffff 0%, #4f94d9ff 80%)'
        break
        case 4:
    color = 'linear-gradient(145deg, #abd2faff 0%, #509ae5ff 80%)'
        break
        case 5:
    color = 'linear-gradient(145deg, #c1dcf8ff 0%, #64acf3ff 80%)'
        break
        case 6:
    color = 'linear-gradient(145deg, #d8e7f7ff 0%, #7bbafaff 80%)'
        break 
    }
    return color
  }