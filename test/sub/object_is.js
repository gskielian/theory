module.exports=require('theory')
({name: 'is_object'
, init: function(a){
	describe('objects',function(){
		it('is()',function(){
			expect(theory.obj({}).is()).to.be(true);
			expect(theory.obj({a:1}).is()).to.be(true);
			expect(theory.obj(0).is()).to.be(false);
			expect(theory.obj(1).is()).to.be(false);
			expect(theory.obj('').is()).to.be(false);
			expect(theory.obj('a').is()).to.be(false);
			expect(theory.obj([]).is()).to.be(false);
			expect(theory.obj([1]).is()).to.be(false);
			expect(theory.obj(false).is()).to.be(false);
			expect(theory.obj(true).is()).to.be(false);
			expect(theory.obj(function(){}).is()).to.be(false);
		});
		it('is',function(){
			expect(theory.obj.is({})).to.be(true);
			expect(theory.obj.is({a:1})).to.be(true);
			expect(theory.obj.is(0)).to.be(false);
			expect(theory.obj.is(1)).to.be(false);
			expect(theory.obj.is('')).to.be(false);
			expect(theory.obj.is('a')).to.be(false);
			expect(theory.obj.is([])).to.be(false);
			expect(theory.obj.is([1])).to.be(false);
			expect(theory.obj.is(false)).to.be(false);
			expect(theory.obj.is(true)).to.be(false);
			expect(theory.obj.is(function(){})).to.be(false);
		});
	});
}});