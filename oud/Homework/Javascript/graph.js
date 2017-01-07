function createTransform(domain, range){
	\\ domain is a two-element array of the data bounds [domain_min, domain_max]
	\\ range is a two-element array of the screen bounds [range_min, range_max]
	\\ This gives you two equations to solve:
	\\ range_min = alpha * domain_min + beta
	\\ range_max = alpha * domain_max + beta
 		\\ Implement your solution here:
 		var alpha = ...;
	var beta = ...;
	
	return function(x){
		return alpha * x + beta;
	};
}