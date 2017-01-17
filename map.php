<?php include "header.php" ?>

<div id="BlueBackground"></div>

<div id="Map">
	<img class="map_image" src="lib/img/rotatingMap.png" alt="Rotating map"/>
</div>

<div id="Flag-Labels">
	<img src="lib/svg/country_names.svg"/>
</div>

<ul id="Flags">
	<li id="Flag-Ethiopia" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Ethiopia" data-leaderLine="#LeaderLine-Ethiopia">
		<div class="blur"></div>
		<img src="lib/svg/flags/ethiopia.svg" alt="Ethiopia Flag" />
	</li>
	<li id="Flag-Uganda" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Uganda" data-leaderLine="#LeaderLine-Uganda">
		<div class="blur"></div>
		<img src="lib/svg/flags/uganda.svg" alt="Uganda Flag" />
	</li>
	<li id="Flag-Malawi" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Malawi" data-leaderLine="#LeaderLine-Malawi">
		<div class="blur"></div>
		<img src="lib/svg/flags/malawi.svg" alt="Malawi Flag" />
	</li>
	<li id="Flag-SouthAfrica" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-SouthAfrica" data-leaderLine="#LeaderLine-SouthAfrica">
		<div class="blur"></div>
		<img src="lib/svg/flags/southafrica.svg" alt="South Africa Flag" />
	</li>
	<li id="Flag-Israel" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Israel" data-leaderLine="#LeaderLine-Israel">
		<div class="blur"></div>
		<img src="lib/svg/flags/israel.svg" alt="Israel Flag" />
	</li>
	<li id="Flag-Sweden" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Sweden" data-leaderLine="#LeaderLine-Sweden">
		<div class="blur"></div>
		<img src="lib/svg/flags/sweden.svg" alt="Sweden Flag" />
	</li>
	<li id="Flag-Denmark" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Denmark" data-leaderLine="#LeaderLine-Denmark">
		<div class="blur"></div>
		<img src="lib/svg/flags/denmark.svg" alt="Denmark Flag" />
	</li>
	<li id="Flag-UK" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-UK" data-leaderLine="#LeaderLine-UK">
		<div class="blur"></div>
		<img src="lib/svg/flags/unitedkingdom.svg" alt="United Kingdom Flag" />
	</li>
	<li id="Flag-Ireland" class="flag" data-cards="#TestCards" data-MapPoint="#MapPoint-Ireland" data-leaderLine="#LeaderLine-Ireland">
		<div class="blur"></div>
		<img src="lib/svg/flags/ireland.svg" alt="Ireland Flag" />
	</li>
	<li id="Flag-Brazil" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Brazil" data-leaderLine="#LeaderLine-Brazil">
		<div class="blur"></div>
		<img src="lib/svg/flags/brazil.svg" alt="Brazil Flag" />
	</li>
	<li id="Flag-DominicanRepublic" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-DominicanRepublic" data-leaderLine="#LeaderLine-DominicanRepublic">
		<div class="blur"></div>
		<img src="lib/svg/flags/dominicanrepublic.svg" alt="Dominican Republic Flag" />
	</li>
	<li id="Flag-Guatemala" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Guatemala" data-leaderLine="#LeaderLine-Guatemala">
		<div class="blur"></div>
		<img src="lib/svg/flags/guatemala.svg" alt="Guatemala Flag" />
	</li>
	<li id="Flag-Honduras" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Honduras" data-leaderLine="#LeaderLine-Honduras">
		<div class="blur"></div>
		<img src="lib/svg/flags/honduras.svg" alt="Honduras Flag" />
	</li>
	<li id="Flag-USA" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-USA" data-leaderLine="#LeaderLine-USA">
		<div class="blur"></div>
		<img src="lib/svg/flags/usa.svg" alt="Tonga Flag" />
	</li>
	<li id="Flag-Canada" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Canada" data-leaderLine="#LeaderLine-Canada">
		<div class="blur"></div>
		<img src="lib/svg/flags/canada.svg" alt="Tonga Flag" />
	</li>
	<li id="Flag-CookIslands" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-CookIslands" data-leaderLine="#LeaderLine-CookIslands">
		<div class="blur"></div>
		<img src="lib/svg/flags/cookislands.svg" alt="Cook Islands Flag" />
	</li>
	<li id="Flag-Tonga" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Tonga" data-leaderLine="#LeaderLine-Tonga">
		<div class="blur"></div>
		<img src="lib/svg/flags/tonga.svg" alt="Tonga Flag" />
	</li>
	<li id="Flag-Fiji" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Fiji" data-leaderLine="#LeaderLine-Fiji">
		<div class="blur"></div>
		<img src="lib/svg/flags/fiji.svg" alt="Fiji Flag" />
	</li>
	<li id="Flag-Phillippines" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Phillipines" data-leaderLine="#LeaderLine-Phillipines">
		<div class="blur"></div>
		<img src="lib/svg/flags/phillippines.svg" alt="The Phillippines Flag" />
	</li>
	<li id="Flag-Australia" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Australia" data-leaderLine="#LeaderLine-Australia">
		<div class="blur"></div>
		<img src="lib/svg/flags/australia.svg" alt="Australia Flag" />
	</li>
	<li id="Flag-SouthKorea" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-SouthKorea" data-leaderLine="#LeaderLine-SouthKorea">
		<div class="blur"></div>
		<img src="lib/svg/flags/southkorea.svg" alt="South Korea Flag" />
	</li>
	<li id="Flag-Russia" class="flag" data-cards="#TestCards" data-mapPoint="#MapPoint-Russia" data-leaderLine="#LeaderLine-Russia">
		<div class="blur"></div>
		<img src="lib/svg/flags/russia.svg" alt="Russia Flag" />
	</li>
</ul>

<ul id="LeaderLines">
	<li id="LeaderLine-Ethiopia" class="leaderLine" data-flag="#Flag-Ethiopia" data-mapPoint="#MapPoint-Ethiopia"></li>
	<li id="LeaderLine-Uganda" class="leaderLine" data-flag="#Flag-Uganda" data-mapPoint="#MapPoint-Uganda"></li>
	<li id="LeaderLine-Malawi" class="leaderLine" data-flag="#Flag-Malawi" data-mapPoint="#MapPoint-Malawi"></li>
	<li id="LeaderLine-SouthAfrica" class="leaderLine" data-flag="#Flag-SouthAfrica" data-mapPoint="#MapPoint-SouthAfrica"></li>
	<li id="LeaderLine-Israel" class="leaderLine" data-flag="#Flag-Israel" data-mapPoint="#MapPoint-Israel"></li>
	<li id="LeaderLine-Sweden" class="leaderLine" data-flag="#Flag-Sweden" data-mapPoint="#MapPoint-Sweden"></li>
	<li id="LeaderLine-Denmark" class="leaderLine" data-flag="#Flag-Denmark" data-mapPoint="#MapPoint-Denmark"></li>
	<li id="LeaderLine-UK" class="leaderLine" data-flag="#Flag-UK" data-mapPoint="#MapPoint-UK"></li>
	<li id="LeaderLine-Ireland" class="leaderLine" data-flag="#Flag-Ireland" data-mapPoint="#MapPoint-Ireland"></li>
	<li id="LeaderLine-Brazil" class="leaderLine" data-flag="#Flag-Brazil" data-mapPoint="#MapPoint-Brazil"></li>
	<li id="LeaderLine-DominicanRepublic" class="leaderLine" data-flag="#Flag-DominicanRepublic" data-mapPoint="#MapPoint-DominicanRepublic"></li>
	<li id="LeaderLine-Honduras" class="leaderLine" data-flag="#Flag-Honduras" data-mapPoint="#MapPoint-Honduras"></li>
	<li id="LeaderLine-Guatemala" class="leaderLine" data-flag="#Flag-Guatemala" data-mapPoint="#MapPoint-Guatemala"></li>
	<li id="LeaderLine-USA" class="leaderLine" data-flag="#Flag-USA" data-mapPoint="#MapPoint-USA"></li>
	<li id="LeaderLine-Canada" class="leaderLine" data-flag="#Flag-Canada" data-mapPoint="#MapPoint-Canada"></li>
	<li id="LeaderLine-CookIslands" class="leaderLine" data-flag="#Flag-CookIslands" data-mapPoint="#MapPoint-CookIslands"></li>
	<li id="LeaderLine-Tonga" class="leaderLine" data-flag="#Flag-Tonga" data-mapPoint="#MapPoint-Tonga"></li>
	<li id="LeaderLine-Fiji" class="leaderLine" data-flag="#Flag-Fiji" data-mapPoint="#MapPoint-Fiji"></li>
	<li id="LeaderLine-Phillipines" class="leaderLine" data-flag="#Flag-Phillipines" data-mapPoint="#MapPoint-Phillipines"></li>
	<li id="LeaderLine-Australia" class="leaderLine" data-flag="#Flag-Australia" data-mapPoint="#MapPoint-Australia"></li>
	<li id="LeaderLine-SouthKorea" class="leaderLine" data-flag="#Flag-SouthKorea" data-mapPoint="#MapPoint-SouthKorea"></li>
	<li id="LeaderLine-Russia" class="leaderLine" data-flga="#Flag-Russia" data-mapPoint="#MapPoint-Russia"></li>
</ul>

<ul id="MapPoints">
	<li id="MapPoint-Ethiopia" class="mapPoint" data-flag="#Flag-Ethiopia" data-mapx="1113" data-mapy="894"></li>
	<li id="MapPoint-Uganda" class="mapPoint" data-flag="#Flag-Uganda" data-mapx="1152" data-mapy="940"></li>
	<li id="MapPoint-Malawi" class="mapPoint" data-flag="#Flag-Malawi" data-mapx="1152" data-mapy="940"></li>
	<li id="MapPoint-SouthAfrica" class="mapPoint" data-flag="#Flag-SouthAfrica" data-mapx="1123" data-mapy="1025"></li>
	<li id="MapPoint-Israel" class="mapPoint" data-flag="#Flag-Israel" data-mapx="1047" data-mapy="796"></li>
	<li id="MapPoint-Sweden" class="mapPoint" data-flag="#Flag-Sweden" data-mapx="957" data-mapy="725"></li>
	<li id="MapPoint-Denmark" class="mapPoint" data-flag="#Flag-Denmark" data-mapx="953" data-mapy="763"></li>
	<li id="MapPoint-UK" class="mapPoint" data-flag="#Flag-UK" data-mapx="934" data-mapy="777"></li>
	<li id="MapPoint-Ireland" class="mapPoint" data-flag="#Flag-Ireland" data-mapx="907" data-mapy="773"></li>
	<li id="MapPoint-Brazil" class="mapPoint" data-flag="#Flag-Brazil" data-mapx="907" data-mapy="773"></li>
	<li id="MapPoint-DominicanRepublic" class="mapPoint" data-flag="#Flag-DominicanRepublic" data-mapx="689" data-mapy="719"></li>
	<li id="MapPoint-Honduras" class="mapPoint" data-flag="#Flag-Honduras" data-mapx="660" data-mapy="661"></li>
	<li id="MapPoint-Guatemala" class="mapPoint" data-flag="#Flag-Guatemala" data-mapx="660" data-mapy="661"></li>
	<li id="MapPoint-USA" class="mapPoint" data-flag="#Flag-USA" data-mapx="739" data-mapy="627"></li>
	<li id="MapPoint-Canada" class="mapPoint" data-flag="#Flag-Canada" data-mapx="799" data-mapy="629"></li>
	<li id="MapPoint-CookIslands" class="mapPoint" data-flag="#Flag-CookIslands" data-mapx="952" data-mapy="248"></li>
	<li id="MapPoint-Tonga" class="mapPoint" data-flag="#Flag-Tonga" data-mapx="1039" data-mapy="245"></li>
	<li id="MapPoint-Fiji" class="mapPoint" data-flag="#Flag-Fiji" data-mapx="1020" data-mapy="215"></li>
	<li id="MapPoint-Phillipines" class="mapPoint" data-flag="#Flag-Phillipines" data-mapx="1173" data-mapy="467"></li>
	<li id="MapPoint-Australia" class="mapPoint" data-flag="#Flag-Australia" data-mapx="1241" data-mapy="360"></li>
	<li id="MapPoint-SouthKorea" class="mapPoint" data-flag="#Flag-SouthKorea" data-mapx="1092" data-mapy="519"></li>
	<li id="MapPoint-Russia" class="mapPoint" data-flga="#Flag-Russia" data-mapx="1049" data-mapy="629"></li>

</ul>

<ul id="TestCards" class="cards draggable" data-flag="placeholder" data-x="0" data-y="0" data-mapPoint="#MapPoint-Canada" data-leaderLine="#LeaderLine-Canada">
	<li><button class="cards-close">x <span>close</span></button></li>
	<li id="Card-pink" class="card"></li>
	<li id="Card-red" class="card"></li>
	<li id="Card-orange" class="card"></li>
	<li id="Card-yellow" class="card"></li>
	<li id="Card-green" class="card"></li>
	<li id="Card-blue" class="card"></li>
	<li id="Card-purple" class="card"></li>
</ul>


<?php include "footer.php" ?>