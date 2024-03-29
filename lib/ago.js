/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

( function( window, undefined ) {

	// convert minutes to seconds
	function m2s( m ) {
		return m * 60;
	}

	// convert hours to seconds
	function h2s( h ) {
		return m2s( h * 60 );
	}

	// convert days to seconds
	function d2s( d ) {
		return h2s( d * 24 );
	}

	// get ago string for the given seconds
	function getAgo( seconds ) {
		if ( seconds === 1 ) {
			return seconds + ' second';
		} else if ( seconds < 45 ) { // 45s
			return seconds + ' seconds';
		} else if ( seconds < 90 ) { // 1m 30s
			return 'a minute';
		} else if ( seconds < m2s( 45 ) ) { // 45m
			return Math.round( seconds / 60 ) + ' minutes';
		} else if ( seconds < m2s( 90 ) ) { // 90m
			return 'an hour';
		} else if ( seconds < h2s( 22 ) ) { // 22h
			return Math.round( seconds / h2s( 1 ) ) + ' hours';
		} else if ( seconds < h2s( 36 ) ) { // 36 hours
			return 'a day';
		} else if ( seconds < d2s( 25 ) ) { // 25 days
			return Math.round( seconds / d2s( 1 ) ) + ' days';
		} else if ( seconds < d2s( 45 ) ) { // 45 days
			return 'a month';
		} else if ( seconds < d2s( 345 ) ) { // 345 days
			return Math.round( seconds / d2s( 30 ) ) + ' months';
		} else if ( seconds < d2s( 548 ) ) { // 1.5 year
			return 'a year';
		} else {
			return Math.round( seconds / d2s( 365 ) ) + ' years';
		}
	}

	// get ago string with optional suffix for the given timestamp
	function agoNumber( timestamp, suffix ) {
		var seconds = Math.floor( ( Date.now() - timestamp ) / 1000 );

		return getAgo( seconds ) + ( ( suffix === undefined || suffix ) ? ' ago' : '' );
	}

	// replace content of elements matching the given selector with timego string
	function agoElement( selector, suffix ) {
		var elements = document.querySelectorAll( selector ),
			timestamp,
			len,
			i;

		if ( !elements.length ) {
			return;
		}

		for ( i = 0, len = elements.length; i < len; i++ ) {
			elem = elements[ i ];

			if ( !isNaN( timestamp = Number( elem.textContent ) ) ) {
				elem.textContent = agoNumber( timestamp, suffix );
			} else if ( ( timestamp = new Date( elem.textContent ) ).toString() !== 'Invalid Date' ) {
				elem.textContent = agoNumber( timestamp, suffix );
			}
		}
	}

	/**
	 * Replaces gieven timestamp, or timestamps in elements defined by the given selector
	 * with a timeago string.
	 *
	 * @param  {Date|String|Number} target Timestamp to replace
	 * @param  {Boolean} suffix Use 'ago' suffix flag
	 * @return {*}
	 *
	 * @example
	 * var timeago = ago(Date.now() - 3000); // returns '3 seconds ago'
	 */
	window.ago = function( target, suffix ) {
		if ( target instanceof Date || typeof target == 'number' ) {
			return agoNumber( target, suffix );
		}

		if ( typeof target == 'string' ) {
			return agoElement( target, suffix );
		}
	};

} )( this );
