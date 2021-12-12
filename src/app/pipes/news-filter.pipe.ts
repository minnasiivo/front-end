import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'NewsFilter'
})


export class NewsFilterPipe implements PipeTransform {
  // tee ensin hakukenttä html:ään
  // ekaksi uutislista, args--> hakusanat
  //palautusarvoksi annetaan hakusanoihin mätsäävät uutiset listasta
  //putki listätään samaan kohtaan kuin cinemadata html:ssä


  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.Title.toLocaleLowerCase().includes(searchText);
    });
  }
}
