import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
    standalone: true
})
export class SearchPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        console.log('SearchPipe called with searchText:', searchText);
        console.log('Items to filter:', items);
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();

        return items.filter(item => {
            return Object.values(item)
                .join(' ')
                .toLowerCase()
                .includes(searchText);
        });
    }
}
