import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { JwtPaginator } from '@app/_helpers';

@Component({ selector: 'jw-pagination', templateUrl: 'pagination.component.html' })
export class JwPaginationComponent implements OnInit, OnChanges {
    @Input() itemLength: number;
    @Output() changePage = new EventEmitter<any>(true);
    @Input() initialPage = 1;
    @Input() pageSize = 10;
    @Input() maxPages = 10;

    pager: any = {};

    ngOnInit() {
        // set page if items array isn't empty
        if (this.itemLength > 0) {
            this.setPage(this.initialPage);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        // reset page if items array has changed
        if (changes.itemLength.currentValue !== changes.itemLength.previousValue) {
            this.setPage(this.initialPage);
        }
    }

    setPage(page: number) {
        // get new pager object for specified page
        this.pager = JwtPaginator(this.itemLength, page, this.pageSize, this.maxPages);

        // call change page function in parent component
        this.changePage.emit(page);
    }
}