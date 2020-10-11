CQL="""CREATE KEYSPACE "sensors" WITH replication = {'class':'SimpleStrategy', 'replication_factor':3}; USE sensors; CREATE TABLE ptSensor(id text,ts text,location text,pressure float, temperature int,primary key(id,ts)) WITH COMPACTION = { 'class': 'TimeWindowCompactionStrategy', 'compaction_window_unit': 'DAYS', 'compaction_window_size': 1};CREATE TABLE leakage(id text,ts text,location text,leakage text,primary key(id,ts)) WITH COMPACTION = { 'class': 'TimeWindowCompactionStrategy', 'compaction_window_unit': 'DAYS', 'compaction_window_size': 1};CREATE TABLE quality(id text,ts text,location text,quality float,primary key(id,ts)) WITH COMPACTION = { 'class': 'TimeWindowCompactionStrategy', 'compaction_window_unit': 'DAYS', 'compaction_window_size': 1};"""

until echo $CQL | cqlsh; do
  echo "cqlsh: Cassandra is unavailable to initialize - will retry later"
  sleep 2
done &

exec /docker-entrypoint.sh "$@"
