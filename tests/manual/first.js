CKEDITOR.replace( 'editor' );

function normalize( string ) {
	return string.replace( /[\n\r\s]+/g, ' ' );
}

describe( 'Basic Styles', function() {
	it( 'should style a paragraph', function() {
		var data = CKEDITOR.instances.editor.getData();

		expect( normalize( data ) ).toEqual( '<p><em><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, obcaecati ullam porro amet reprehenderit eum fugiat temporibus accusantium laudantium officiis, esse. Minus odit hic voluptas, quam aperiam reiciendis, doloremque mollitia.</em></p> <p>&nbsp;</p> ' );
	} );
} );
