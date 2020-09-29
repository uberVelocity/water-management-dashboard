CQL="""CREATE KEYSPACE "sensors" WITH replication = {'class':'SimpleStrategy', 'replication_factor':3}; USE sensors; CREATE TABLE sensor1(ts text ,pressure int, temperature int,primary key(ts)) WITH COMPACTION = { 'class': 'TimeWindowCompactionStrategy', 'compaction_window_unit': 'DAYS', 'compaction_window_size': 1};"""

until echo $CQL | cqlsh; do
  echo "cqlsh: Cassandra is unavailable to initialize - will retry later"
  sleep 2
done &

exec /docker-entrypoint.sh "$@"
